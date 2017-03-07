
exports.seed = function(knex, Promise) {
  return knex('profile').del()
    .then(function () {
      return knex('profile').insert([
        {id: 88802, user_id: 99901, star_sign: 'Leo'},
        {id: 88801, user_id: 99902, star_sign: 'Leo'},
        {id: 88803, user_id: 99903, star_sign: 'Leo'},
        {id: 88804, user_id: 99904, star_sign: 'Leo'},
        {id: 88805, user_id: 99905, star_sign: 'Leo'},
        {id: 88806, user_id: 99906, star_sign: 'Leo'},
        {id: 88807, user_id: 99907, star_sign: 'Leo'},
        {id: 88808, user_id: 99908, star_sign: 'Leo'},
        {id: 88809, user_id: 99909, star_sign: 'Leo'},
        {id: 88810, user_id: 99910, star_sign: 'Leo'},
        {id: 88811, user_id: 99911, star_sign: 'Leo'},
        {id: 88812, user_id: 99912, star_sign: 'Leo'},
        {id: 88813, user_id: 99913, star_sign: 'Leo'},
        {id: 88814, user_id: 99914, star_sign: 'Leo'},
        {id: 88815, user_id: 99915, star_sign: 'Leo'},
        {id: 88816, user_id: 99916, star_sign: 'Leo'},
        {id: 88826, user_id: 99917, star_sign: 'Leo'},
        {id: 88817, user_id: 99918, star_sign: 'Leo'},
        {id: 88818, user_id: 99919, star_sign: 'Leo'},
        {id: 88819, user_id: 99920, star_sign: 'Leo'},
        {id: 88820, user_id: 99921, star_sign: 'Leo'},
        {id: 88821, user_id: 99922, star_sign: 'Leo'},
        {id: 88822, user_id: 99923, star_sign: 'Leo'},
        {id: 88823, user_id: 99924, star_sign: 'Leo'},
        {id: 88824, user_id: 99925, star_sign: 'Leo'},
        {id: 88825, user_id: 99926, star_sign: 'Leo'},
      ]);
    });
};
