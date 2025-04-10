import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Иван Иванов',
      position: 'CEO',
      img: '../../public/img/2.jpg',
      img_rez: './img/2.jpg',
    },
    {
      name: 'Анна Петрова',
      position: 'CTO',
      img: '../../public/img/1.jpg',
      img_rez: './img/1.jpg',
    },
    {
      name: 'Сергей Сидоров',
      position: 'Разработчик',
      img: '../../public/img/4.jpg',
      img_rez: './img/4.jpg',
    },
    {
      name: 'Мария Кузнецова',
      position: 'Дизайнер',
      img: '../../public/img/3.jpg',
      img_rez: './img/3.jpg',
    },
  ];

  const handleError = (
    img_rez: string,
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const target = event.target as HTMLImageElement;
    // Если возникает ошибка при загрузке первого изображения, меняем источник на другое изображение
    target.src = img_rez;
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Наша команда</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-3 text-center mb-4" key={index}>
            <div className="card">
              <img
                src={member.img}
                className="card-img-top"
                alt={member.name}
                onError={(event) => handleError(member.img_rez, event)}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
