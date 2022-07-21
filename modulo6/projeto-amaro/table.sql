-- Active: 1653331321827@@35.226.146.116@3306@silveira-21814331-eric-silva

CREATE TABLE
    amaro_products(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR (255) NOT NULL
    );

CREATE TABLE
    amaro_tags(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR (255) NOT NULL
    );
CREATE TABLE
    amaro_products_tags(
        id_product VARCHAR(255),
        id_tags VARCHAR(255),
        FOREIGN KEY(id_product) REFERENCES `amaro_products`(id),
        FOREIGN KEY(id_tags) REFERENCES `amaro_tags`(id)
    )