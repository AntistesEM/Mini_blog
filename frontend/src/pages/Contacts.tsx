import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contacts: React.FC = () => {
  const position = {
    latitude: 55.7558,
    longitude: 37.6173,
  }; // Примерные координаты

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Контакты</h1>
      <p className="lead text-center mb-5">
        Свяжитесь с нами по следующим контактам:
      </p>

      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <FaEnvelope className="me-2 text-primary" />
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:support@example.com"
                    className="ms-2 text-decoration-none"
                  >
                    support@example.com
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaPhone className="me-2 text-primary" />
                  <strong>Телефон:</strong>{' '}
                  <a
                    href="tel:+71234567890"
                    className="ms-2 text-decoration-none"
                  >
                    +7 (123) 456-78-90
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  <strong>Адрес:</strong>{' '}
                  <span className="ms-2">
                    ул. Примерная, 10, г. Москва, Россия
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p />

      {/* Вставка Яндекс.Карт с маркером */}
      <div className="text-center mb-4">
        <iframe
          title="Карта расположения"
          className="rounded shadow"
          width="100%"
          height="400"
          src={`https://yandex.ru/map-widget/v1/-/CCU1glichB?ll=${position.longitude},${position.latitude}&z=15&l=map&pt=${position.longitude},${position.latitude},pm2dvl`}
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default Contacts;
