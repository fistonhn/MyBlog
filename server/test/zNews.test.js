import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';
import usersTest from '../models/usersData';
import newsTest from '../models/newsData';
import { generateToken } from '../helper/generateAuthToken';


const { expect } = chai;
chai.use(chaiHttp);
dotenv.config();


const token = generateToken(usersTest[5].id, usersTest[5].email, usersTest[5].isAdmin);
const unthToken = generateToken(usersTest[12].id, usersTest[12].email, usersTest[12].isAdmin);
const invalidToken = '';

// create news

describe('When the user try to create a new entry--- POST news,api/v2/news', () => {
  it('should return title must be required ', (done) => {
    chai
      .request(app)
      .post('/api/v2/news')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send(newsTest[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"title" is not allowed to be empty');
        done();
      });
  });
  it('should return description must be a string ', (done) => {
    chai
      .request(app)
      .post('/api/v2/news')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send(newsTest[1])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"description" is not allowed to be empty');
        done();
      });
  });
  // it('should return news successfully created', (done) => {
  //   chai
  //     .request(app)
  //     .post('/api/v2/news')
  //     .set('Accept', 'application/json')
  //     .set('Authorization', token)
  //     .send(newsTest[2])
  //     .end((err, res) => {
  //       console.log(res)
  //       expect(res.body).to.be.an('object');
  //       expect(res.status).to.equal(201);
  //       expect(res.body.status).to.equal(201);
  //       expect(res.body.message).to.equal('news successfully created');
  //       done();
  //       if (err) return done(err);
  //     });
  // });
});


// get all news

describe('When guest tries to view all news--- GET news,api/v2/news', () => {
  // it('should return display all news', (done) => {
  //   chai
  //     .request(app)
  //     .get('/api/v2/news')
  //     .end((err, res) => {
  //       expect(res.status).to.equal(200);
  //       expect(res.body.status).to.equal(200);
  //       expect(res.body.message).to.equal('display all news');
  //       done();
  //     });
  // });
  it('should return the page you request does not exist', (done) => {
    chai
      .request(app)
      .get('/api/v2/news?p=15')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('the page you request does not exist');
        done();
      });
  });
  // it('should return displayed news by pagination', (done) => {
  //   chai
  //     .request(app)
  //     .get('/api/v2/news?p=1')
  //     .end((err, res) => {
  //       expect(res.status).to.equal(200);
  //       expect(res.body.status).to.equal(200);
  //       expect(res.body.message).to.equal('display all news');
  //       done();
  //     });
  // });
});


// get single news

describe('When the user tries to view a specific news--- GET news,api/v2/news/id', () => {
  it('should return params id must be a number ', (done) => {
    chai
      .request(app)
      .get('/api/v2/news/h')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        done();
      });
  });
  it('should return news not found ', (done) => {
    chai
      .request(app)
      .get('/api/v2/news/3')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.message).to.equal('No news to display');
        done();
      });
  });
  // it('should return selected news to the user ', (done) => {
  //   chai
  //     .request(app)
  //     .get('/api/v2/news/1')
  //     .end((err, res) => {
  //       expect(res.body).to.be.an('object');
  //       expect(res.status).to.equal(200);
  //       expect(res.body.status).to.equal(200);
  //       done();
  //     });
  // });
});



// get by category 

describe('When the user try to view news by category--- GET news,api/v2/news/topic', () => {
 
  // it('should return selected news to the user ', (done) => {
  //   chai
  //     .request(app)
  //     .get('/api/v2/news/topic?topic=football')
  //     .end((err, res) => {
  //       expect(res.body).to.be.an('object');
  //       expect(res.status).to.equal(200);
  //       expect(res.body.status).to.equal(200);
  //       done();
  //     });
  // });
  it('should return No news to display ', (done) => {
    chai
      .request(app)
      .get('/api/v2/news/topic?topic=sport')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        done();
      });
  });
});




// update news

describe('When the user tries to UPDATE a specific news--- PATCH news,api/v2/news/id', () => {
  it('should return title must be string', (done) => {
    chai
      .request(app)
      .patch('/api/v2/news/1')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send(newsTest[3])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"title" must be a string');
        done();
      });
  });
  it('should return description must be string', (done) => {
    chai
      .request(app)
      .patch('/api/v2/news/1')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send(newsTest[4])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('"description" must be a string');
        done();
      });
  });
  it('should return There is no news with that id', (done) => {
    chai
      .request(app)
      .patch('/api/v2/news/145')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send(newsTest[5])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        done();
      });
  });
  it('should return You are not authorized to perform this action', (done) => {
    chai
      .request(app)
      .patch('/api/v2/news/1')
      .set('Accept', 'application/json')
      .set('Authorization', unthToken)
      .send(newsTest[5])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(401);
        expect(res.body.status).to.equal(401);
        expect(res.body.error).to.equal('You are not authorized to perform this action');
        done();
      });
  });
  it('should return news not found', (done) => {
    chai
      .request(app)
      .patch('/api/v2/news/10')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send(newsTest[5])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('news not found');
        done();
      });
  });
  // it('should return news successfull updated ', (done) => {
  //   chai
  //     .request(app)
  //     .patch('/api/v2/news/1')
  //     .set('Accept', 'application/json')
  //     .set('Authorization', token)
  //     .send(newsTest[5])
  //     .end((err, res) => {
  //       expect(res.body).to.be.an('object');
  //       expect(res.status).to.equal(200);
  //       expect(res.body.message).to.equal('news successful updated');
  //       done();
  //     });
  // });
});


// delete news

describe('delete news, --api/v2/news/id', () => {
  it('should return news not found', (done) => {
    chai
      .request(app)
      .delete('/api/v2/news/145')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.message).to.equal('news not found');
        done();
      });
  });
  // it('should return news successfull deleted', (done) => {
  //   chai
  //     .request(app)
  //     .delete('/api/v2/news/1')
  //     .set('Accept', 'application/json')
  //     .set('Authorization', token)
  //     .end((err, res) => {
  //       expect(res.body).to.be.an('object');
  //       expect(res.status).to.equal(200);
  //       expect(res.body.status).to.equal(200);
  //       expect(res.body.message).to.equal('​news successfully deleted');
  //       done();
  //     });
  // });
});
