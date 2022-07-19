-- Active: 1653331321827@@35.226.146.116@3306@silveira-21814331-eric-silva

CREATE TABLE
    amaro(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        price FLOAT,
        photo VARCHAR(255) NOT NULL,
        description TEXT,
        tag ENUM (
            "CLOTHES",
            "SHOES",
            "ACCESSORIES",
            "BEAUTY",
            "HOUSE",
            "CHILD"
        )
    );