# Exercício 1
### a)ARCHAR(n) - strings de no máximo n caracteres
### DATE - representa uma data (YYYY-MM-DD)
### B)SHOW DATABASES e SHOW TABLES são usados para visualização das
### estruturas de um banco de dados.
### C) O comando DESCRIBE é usado para conferir a estrutura de uma tabela.
### Ao usar o comando, obtive uma tabela com todas as propiedades
# Exercício2
### b)Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'.
### A mensagem de erro acorreu pq o id funciona como um identificador na tabela,
### por isso utilizamos a propíedade "PRIMARY", de primary key e só é possível
### haver um valor, em caso de repetição desse valor declarado ocorrerá um erro.
### c)Código de erro: 1136. A contagem de colunas não corresponde à contagem de ### valores na linha 1.
### faltaram dois parâmetros da tabela (birth_date, gender)
### d)Código de erro: 1364. O campo 'nome' não tem um valor padrão
### faltou o parâmetro name e o valor.
### e)Código de erro: 1292. Valor de data incorreto: '1950' para a coluna ###'birth_date' na linha 1
### birth_date foi declarado como string e o valor estava sem aspas
#   Exercício 3
### c)Não teve retorno pq não existe nenhum gender com o valor de invalid na ###  tabela
### e)Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
### o parâmetro name estava escrito "nome"
# Exercício 4
### a) a Query filtra pela primeira letra, no caso "A" ou "J" do nome e pela ###  quantidade de salário.

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
```
SHOW DATABASES;
```
```
SHOW TABLES;
```
```
DESCRIBE Actor;
```
```
INSERT INTO Actor VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");
```
```
INSERT INTO Actor VALUES("002", "Balsanaro", 2400000, "1973-04-09", "male");
```
```
INSERT INTO Actor (id, salary, birth_date, gender) VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("004", "Antônio Fagundes", 400000, "1949-04-18", "male");
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("006", "Tarcísio Meira", 719333.33, "1933-01-09", "male");
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "007", "Glória Menezes", 400000, "1934-10-19", "female");
```
```
SELECT id, name from Actor WHERE gender = "female";
```
```
SELECT id, salary from Actor WHERE name = "Tony Ramos";
```
```
SELECT id, name from Actor WHERE gender = "Invalid";
```
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```
```
SELECT id, nome from Actor WHERE id = "002";
```
```
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
```
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
```
```
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
```
```
SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
```



# Exercício 5

## a)

```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date_of DATE NOT NULL,
    evaluation VARCHAR(2) NOT NULL
);
```

## b)

```
INSERT INTO Movie VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);
```

## c) 

```
INSERT INTO Movie VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);
```

## d)

```
INSERT INTO Movie VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);
```

## e) 

```
INSERT INTO Movie VALUES ("004", "Tropa de Elite", "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.
", "2007-09-12", 9);
```

# Exercício 6 

## a) 

```
SELECT id, title, evaluation FROM Movie WHERE id = "004";
```

## b)

```
SELECT title FROM Movie WHERE title = "Tropa de Elite";
```

## c)

```
SELECT id, title, synopsis FROM Movie WHERE evaluation >= 7;
```

# Exercício 7

## a) 

```
SELECT * FROM Movie WHERE title LIKE "%elite%";
```

## b) 

```
SELECT * FROM Movie WHERE title LIKE "%você%" OR synopsis LIKE "%anos%";
```

## c) 

```
SELECT * FROM Movie WHERE release_date_of < "2022-06-06";
```

## d) 
```
SELECT * FROM Movie WHERE release_date_of < "2022-06-06" and (title LIKE "%você" OR synopsis LIKE "%anos%") and evaluation > 7;
```

