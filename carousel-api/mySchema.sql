DROP DATABASE IF EXISTS venicle;
CREATE DATABASE venicle;

USE venicle;

CREATE TABLE cars
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  make VARCHAR
  (100) NOT NULL,
  model VARCHAR
  (90) NOT NULL,
  year VARCHAR
  (90) NOT NULL
);
  CREATE TABLE images
  (
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
  image VARCHAR
    (250) NOT NULL,
  cars_id INT NOT NULL DEFAULT 1,
  FOREIGN KEY
    (cars_id)
    REFERENCES cars
    (id)
);

    INSERT INTO cars
      (
      make, model, year
      )
    VALUES
      ('Lada', 'Niva', '1977'),
      ('Volga', 'GAZ-24', '1970'),
      ('Moskvitch', '2140', '1976'),
      ('UAZ', 'Hunter', '1969'),
      ('Kalashnikov', 'CV1', '1973'),
      ('Porcshe', '911', '2015'),
      ('Toyota', 'Corolla', '2018'),
      ('Hummer', 'H2', '2002');
    INSERT INTO images
      (image)
    VALUES
      ('https://pictures.dealer.com/e/echoparkcentennial/0361/68716ec8bba10de07fd77e014d6db89ex.jpg?impolicy=resize&w=650'),
      ('https://pictures.dealer.com/e/echoparkcentennial/1599/1c5ace2cf3069b1f31a1039559256bdcx.jpg?impolicy=resize&w=650'),
      ('https://pictures.dealer.com/e/echoparkcentennial/1337/0f02b158e357cf1c3f648748a314382cx.jpg?impolicy=resize&w=650');
       

