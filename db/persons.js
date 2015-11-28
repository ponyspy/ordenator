/* === Ordens ids ===

  1 - Я очень красивый орден
  2 - Орден святого арбуза
  3 - Орден святой дыни
  4 - Какой-то еще орден...

=== */

var persons_db = {};

persons_db['defaults'] = {
  reject: 'Сообщение по умолчанию если орден не совпал'
}

persons_db['list'] = [

  // === Person 1 ===

  {
    _person_id: 1,
    img: 'img/persons/01.png',
    name: 'Деникин Антон Иванович Генерал-майор, командир 4-й стрелковой бригады, прозванной за мужество «железной»',
    ordens: [

      {
        _orden_id: 1,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

      {
        _orden_id: 2,
        sucess: false,
        reject: 'Орден не совпал потому что...'
      }

    ]
  },

  // === Person 2 ===

  {
    _person_id: 2,
    img: 'img/persons/02.png',
    name: 'Деникин Антон Иванович Генерал-майор, командир 4-й стрелковой бригады, прозванной за мужество «железной»',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 3 ===

  {
    _person_id: 3,
    img: 'img/persons/03.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 4 ===

  {
    _person_id: 4,
    img: 'img/persons/04.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 5 ===

  {
    _person_id: 5,
    img: 'img/persons/05.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 6 ===

  {
    _person_id: 6,
    img: 'img/persons/06.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 7 ===

  {
    _person_id: 7,
    img: 'img/persons/07.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 8 ===

  {
    _person_id: 8,
    img: 'img/persons/08.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 9 ===

  {
    _person_id: 9,
    img: 'img/persons/09.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 10 ===

  {
    _person_id: 10,
    img: 'img/persons/10.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 11 ===

  {
    _person_id: 11,
    img: 'img/persons/11.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

  // === Person 12 ===

  {
    _person_id: 12,
    img: 'img/persons/12.png',
    name: 'Вася Улей',
    ordens: [

      {
        _orden_id: 2,
        sucess: 'Орден совпал! Ты молодец и очень красивый человек, продолжай в том же духе...',
        reject: false
      },

    ]
  },

]