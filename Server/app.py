from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS
from random import choice, randint
from string import ascii_lowercase
from constants import NAMES, INITIIAL_THEMES, INITIAL_CITIES, COMPANIES, ADDRESSES

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///site.db"
with app.app_context():
    db = SQLAlchemy(app)


# with open(r'C:\Users\ttsul\Desktop\სახელები.txt', encoding='UTF-8') as f:
#     a = [line.strip().split('\t')[1] for line in f.readlines()]


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    personalId = db.Column(db.String(50), nullable=False, unique=True)
    phoneNumber = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    haveBusiness = db.Column(db.Boolean(), nullable=False, default=False)
    balance = db.Column(db.Integer, nullable=False, default=0)
    finances = db.relationship('UserTransactions', backref='person', lazy=True)
    business = db.relationship('Business', backref='owner', lazy=True)


class UserTransactions(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date = db.Column(db.Date)
    transaction = db.Column(db.Integer, nullable=False)
    purpose = db.Column(db.String(50))
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False,
                     unique=True, default='None')
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'), nullable=False, unique=True)
    themes = db.relationship("BusinessThemes", backref='business', lazy=True)
    offices = db.relationship('Offices', backref='business', lazy=True)


class Themes(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    theme = db.Column(db.String(50), nullable=False)
    themes = db.relationship('BusinessThemes', backref='theme', lazy=True)


class BusinessThemes(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    theme_id = db.Column(db.Integer, db.ForeignKey(
        'themes.id'), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(
        'business.id'), nullable=False)


class Offices(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    address = db.Column(db.String(50), nullable=False, unique=True)
    business_id = db.Column(db.Integer, db.ForeignKey(
        'business.id'), nullable=False)
    transactions = db.relationship(
        'OfficeTransactions', backref='office', lazy=True)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)


class Cities(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    city = db.Column(db.String(50), nullable=False, unique=True)
    offices = db.relationship('Offices', backref='city', lazy=True)
    users = db.relationship('UserTransactions', backref='city', lazy=True)


class OfficeTransactions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    income = db.Column(db.Integer, nullable=False)
    office_id = db.Column(db.Integer, db.ForeignKey(
        'offices.id'), nullable=False)


def response_generator(name, source, limit):
    result = []
    for i in range(1, limit + 1):
        income = randint(source // 2, source * 3 // 2)
        outcome = randint(source // 3, source * 5 // 4)
        result.append(
            {
                f'{name} {i}': {
                    'Income': income,
                    'Outcome': outcome
                }
            }
        )
    return result


@app.route('/')
def hello_world():  # put application's code here
    return f'hello'


@app.route('/auth/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.json
        user = User(name=data['firstName'], lastName=data['lastName'], email=data['email'], password=data['password'],
                    phoneNumber=data['phone'], haveBusiness=data['selectedOption'] == 'Business')
        if db.session.execute(db.select(User).filter_by(email=user.email)):
            return {'Error Message': 'Email Already Exists'}, 409
        if db.session.execute(db.select(User).filter_by(phoneNumber=user.phoneNUmber)):
            return {'Error Message': 'Phone Number Already Exists'}, 409
        if db.session.execute(db.select(User).filter_by(personalId=user.personalId)):
            return {'Error Message': 'ID Already Exists'}, 409
        db.session.add(user)
        db.session.commit()
        return ('hello', 200)
    else:
        return ('hello', 200)


@app.route('/Transactions')
def get_transaction_data():
    return {'data': 'hello'}


@app.route('/auth/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.json
        check = db.session.execute(db.select(User).filter_by(
            email=data['email'], password=data['password'])).first()

        print(bool(check))
        response = {'resp': bool(check)}
        return jsonify(response)
    else:
        return 'muwuka'


@app.route('/Stats/<int:id>')
def calculations(id):
    user = db.session.execute(db.select(User).filter_by(id=id)).first()[0]
    tviuri_shemosavali = sum(
        [transaction.transaction for transaction in user.finances])
    kvireuli_shemosavali = tviuri_shemosavali // 4
    dgiuri_shemosavali = kvireuli_shemosavali // 7
    print(tviuri_shemosavali)
    resp = list()
    resp.append({'days': response_generator('day', dgiuri_shemosavali, 7)})
    resp.append({'weeks': response_generator('week', kvireuli_shemosavali, 4)})
    resp.append({'months': response_generator(
        'month', tviuri_shemosavali, 12)})
    json_data = jsonify({'data': resp})
    return json_data


# # adding 100 users
# with app.app_context():
#     for i in range(1, 101):
#         name = choice(NAMES)
#         lname = choice(NAMES)
#         email = f'{name}.{lname}@gmail.com'
#         personalId = str(randint(10000000000, 99999999999))
#         phoneNumber = str(randint(500000000, 599999999))
#         password = ''.join([choice(ascii_lowercase) for _ in range(8)])
#         haveBusiness = bool(choice([0, 1]))
#         balance = randint(500, 1000000) * 10
#         try:
#             user = User(name=name, lastName=lname, haveBusiness=haveBusiness, balance=balance, password=password,
#                         phoneNumber=phoneNumber, personalId=personalId, email=email)
#         except:
#             continue
#         db.session.add(user)
#     db.session.commit()

# # creating tables
# with app.app_context():
#     db.create_all()

# # adding businesses
# with app.app_context():
#     users = db.session.execute(
#         db.select(User).filter_by(haveBusiness=1)).scalars()
#     for user, company in zip(users, COMPANIES):
#         business = Business(user_id=user.id, name=company)
#         db.session.add(business)
#     db.session.commit()


# # adding initial cities
# with app.app_context():
#     for city in INITIAL_CITIES:
#         cty = Cities(city=city)
#         db.session.add(cty)
#     db.session.commit()

# # adding initial themes
# with app.app_context():
#     for theme in INITIIAL_THEMES:
#         thme = Themes(theme=theme)
#         db.session.add(thme)
#     db.session.commit()

# # adding offices
# with app.app_context():
#     for i, address in zip(range(1, len(ADDRESSES) + 1), ADDRESSES):
#         office = Offices(address=address, business_id=i,
#                          city_id=randint(1, len(Cities.query.all())))
#         db.session.add(office)
#     db.session.commit()


# # adding transactions
# with app.app_context():
    users = len(User.query.all())
    for i in range(20 * users):
        transaction = UserTransactions(date=datetime(randint(2020, 2023), randint(1, 12), randint(1,  28)),
                                       transaction=randint(-1500, 10000) * 5, purpose='Something',
                                       city_id=randint(1, len(Cities.query.all())), userId=randint(1, users))
        db.session.add(transaction)
    db.session.commit()
