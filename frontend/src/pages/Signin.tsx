import React, { useState } from 'react';

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика авторизации должна быть здесь
    console.log('Вход:', { email, password });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Вход</h1>
      <form onSubmit={handleSubmit} className="col-md-4 mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Signin;
