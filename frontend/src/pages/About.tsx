import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">О компании</h1>
      <p className="lead text-center">
        Мы - лидер в нашей отрасли, предоставляющий своим клиентам
        высококачественные услуги.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Наша Миссия</h5>
              <p className="card-text">
                Предоставлять инновационные решения, которые помогают бизнесам
                достигать их целей и расти.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Наши Ценности</h5>
              <p className="card-text">
                Честность, качество и клиентоориентированность - три столпа
                нашей работы.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Наш Успех</h5>
              <p className="card-text">
                Довольные клиенты по всему миру. Присоединяйтесь к нам и станьте
                частью успешной истории!
              </p>
              <a href="/contacts" className="btn btn-primary">
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
