import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import usersTest from '../models/usersData';
import { generateToken } from '../helper/generateAuthToken';

const { expect } = chai;
chai.use(chaiHttp);


const authorToken = generateToken(usersTest[14].id, usersTest[14].email, usersTest[14].isAdmin);
const adminToken = generateToken(usersTest[5].id, usersTest[5].email, usersTest[5].isAdmin);

// incorrect route
describe('when user send non existed routes ', () => {
  it('should return Incorrect route! try again ', (done) => {
    chai.request(app)
      .get('/')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(400);
        expect(res.status).to.equal(400);
        done();
      });
  });
});

 // create user admin

describe('When the user try to signup --api/v2/auth/signup', () => {
  it('should return firstName is required ', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .set('Accept', 'application/json')
      .send(usersTest[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"firstName" is required');
        done();
      });
  });
  it('should return lastName must be a provided', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .set('Accept', 'application/json')
      .send(usersTest[1])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"lastName" is not allowed to be empty');
        done();
      });
  });
  it('should return invalid email ', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .set('Accept', 'application/json')
      .send(usersTest[2])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"email" must be a valid email');
        done();
      });
  });
  it('should return password must be 6 long string', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .set('Accept', 'application/json')
      .send(usersTest[3])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"password" length must be at least 6 characters long');
        done();
      });
  });
  it('should return user created successfull', (done) => {
    
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .set('Accept', 'application/json')
      .send(usersTest[5])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal(201);
        expect(res.body.message).to.equal('User created successfull');
        expect(res.body.data).to.have.property('token');
        expect(res.body.data.userInfo.firstname).to.equal('hbn');
        expect(res.body.data.userInfo.lastname).to.equal('fiston');
        expect(res.body.data.userInfo.email).to.equal('prosperfiston@gmail.com');
        done();
      });
  });


  // login user

  it('should return Email already taken', (done) => {
   
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .set('Accept', 'application/json')
      .send(usersTest[5])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(409);
        expect(res.body.message).to.equal('Email address already taken');
        done();
      });
  });
});


describe(' When the user try to login --api/v2/auth/signin', () => {
  it('should return email is required!', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signin')
      .set('Accept', 'application/json')
      .send(usersTest[6])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"email" is required');
        done();
      });
  });
  it('should return password must be string!', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signin')
      .set('Accept', 'application/json')
      .send(usersTest[7])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"password" must be a string');
        done();
      });
  });
  it('should return No associated account with this email!', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signin')
      .set('Accept', 'application/json')
      .send(usersTest[8])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.message).to.equal('No associated account with this email');
        done();
      });
  });
  it('should return Incorrect password!', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signin')
      .set('Accept', 'application/json')
      .send(usersTest[9])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.message).to.equal('Incorrect password!');
        done();
      });
  });
  it('should user loggin successfull', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signin')
      .set('Accept', 'application/json')
      .send(usersTest[10])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.message).to.equal('loggin successfull');
        expect(res.body.data).to.have.property('token');
        expect(res.body.data.userInfo.firstname).to.equal('hbn');
        expect(res.body.data.userInfo.lastname).to.equal('fiston');
        expect(res.body.data.userInfo.email).to.equal('prosperfiston@gmail.com');
        done();
      });
  });
});

// sign up for anather user --author
describe('When the user try to signup --api/v2/auth/signup', () => {
  it('should return user created successfull', (done) => {
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .set('Accept', 'application/json')
      .send(usersTest[14])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal(201);
        expect(res.body.message).to.equal('User created successfull');
        expect(res.body.data).to.have.property('token');
        expect(res.body.data.userInfo.firstname).to.equal('hbn');
        expect(res.body.data.userInfo.lastname).to.equal('fils');
        expect(res.body.data.userInfo.email).to.equal('fils@gmail.com');
        done();
      });
  });
});


// get users

describe('When the admin try to get all user --api/v2/auth', () => {
  it('should return all users', (done) => {
    chai
      .request(app)
      .get('/api/v2/auth')
      .set('Accept', 'application/json')
      .set('Authorization', adminToken)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal(201);
        expect(res.body.message).to.equal('Users displayed successfull');
        done();
      });
  });
  it('should return access dinied you are not admin', (done) => {
    chai
      .request(app)
      .get('/api/v2/auth')
      .set('Accept', 'application/json')
      .set('Authorization', authorToken)
      .end((err, res) => {
        expect(res.status).to.equal(403);
        expect(res.body.status).to.equal(403);
        expect(res.body.error).to.equal('Access denied, you are not an Admin');
        done();
      });
  });
});

// update users

describe('When the admin try to update user --api/v2/auth/id', () => {
  it('should return user successful updated', (done) => {
    chai
      .request(app)
      .patch('/api/v2/auth/2')
      .set('Accept', 'application/json')
      .set('Authorization', adminToken)
      .send(usersTest[5])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('user successful updated');
        done();
      });
  });
  it('should return user not found', (done) => {
    chai
      .request(app)
      .patch('/api/v2/auth/60')
      .set('Accept', 'application/json')
      .set('Authorization', adminToken)
      .send(usersTest[16])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.message).to.equal('user not found');
        done();
      });
  });
  it('should return user not found', (done) => {
    chai
      .request(app)
      .patch('/api/v2/auth/2')
      .set('Accept', 'application/json')
      .set('Authorization', adminToken)
      .send(usersTest[18])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        done();
      });
  });
});


// delete users

describe('When the admin try to delete user --api/v2/auth/id', () => {
  it('should return user not found', (done) => {
    chai
      .request(app)
      .delete('/api/v2/auth/60')
      .set('Accept', 'application/json')
      .set('Authorization', adminToken)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.message).to.equal('user not found');
        done();
      });
  });

  it('should return user successfully deleted', (done) => {
    chai
      .request(app)
      .delete('/api/v2/auth/2')
      .set('Accept', 'application/json')
      .set('Authorization', adminToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        done();
      });
  });
});

