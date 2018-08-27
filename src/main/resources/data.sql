-- roles
INSERT INTO T_USER_ROLE (ID, NAME)
VALUES (1, 'ADMIN');

INSERT INTO T_USER_ROLE (ID, NAME)
VALUES (2, 'DEPUTY');

-- users
INSERT INTO T_USER (ID, USERNAME, PASSWORD, ROLE_ID)
VALUES (1, 'admin', 'admin', 1);

INSERT INTO T_USER (ID, USERNAME, PASSWORD, ROLE_ID)
VALUES (2, 'deputy', 'deputy', 2);

-- books

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (1, 'The Bourne Identity', 'Robert Ludlum', 1980, 20.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (2, 'The Bourne Supremacy', 'Robert Ludlum', 1986, 20.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (3, 'The Bourne Ultimatum', 'Robert Ludlum', 1990, 22.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (4, 'The Bourne Legacy', 'Robert Ludlum and Eric Van Lustbader', 2004, 20.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (5, 'The Bourne Betrayal', 'Robert Ludlum and Eric Van Lustbader', 2007, 20.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (6, 'The Bourne Sanction', 'Robert Ludlum and Eric Van Lustbader', 2008, 19.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (7, 'The Bourne Deception', 'Robert Ludlum and Eric Van Lustbader', 2009, 23.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (8, 'The Bourne Objective', 'Robert Ludlum and Eric Van Lustbader', 2010, 23.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (9, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 12.49);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (10, 'To Kill a Mockingbird', 'Harper Lee', 1960, 13.99);

INSERT INTO T_BOOK (ID, TITLE, AUTHOR, PUBLISHED_YEAR, PRICE)
VALUES (11, 'Ulysses', 'James Joyce', 1922, 12.99);