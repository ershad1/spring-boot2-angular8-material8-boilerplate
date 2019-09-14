INSERT INTO role (id, name) VALUES(1,'USER');
INSERT INTO role (id, name) VALUES(2, 'MANAGER');
INSERT INTO role (id, name) VALUES(3, 'ADMIN');
INSERT INTO role (id, name) VALUES(4, 'SYSTEM_ADMIN');

INSERT INTO department (id, name, code) VALUES(1, 'Accounting', 'ACC');
INSERT INTO department (id, name, code) VALUES(2, 'Human Resource', 'HRD');
INSERT INTO department (id, name, code) VALUES(3, 'Marketing', 'MRK');
INSERT INTO department (id, name, code) VALUES(4, 'Procurement', 'PCM');

truncate user;
INSERT INTO user(id, email, username, password, role_id) VALUES (1, 'user@email.com', 'user', '$2a$10$ntohOXzMEKFsVMP873biZOeSy0tYGQHBP5QKBsIFz48eLz//xClbi', 1);
INSERT INTO user(id, email, username, password, role_id) VALUES (2, 'manager@email.com', 'manager', '$2a$10$ntohOXzMEKFsVMP873biZOeSy0tYGQHBP5QKBsIFz48eLz//xClbi', 2);
INSERT INTO user(id, email, username, password, role_id) VALUES (3, 'admin@email.com', 'admin', '$2a$10$ntohOXzMEKFsVMP873biZOeSy0tYGQHBP5QKBsIFz48eLz//xClbi', 3);
INSERT INTO user(id, email, username, password, role_id) VALUES (4, 'sysadmin@email.com', 'sysadmin', '$2a$10$ntohOXzMEKFsVMP873biZOeSy0tYGQHBP5QKBsIFz48eLz//xClbi', 4);

