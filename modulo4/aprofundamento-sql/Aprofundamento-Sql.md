# Aprofundamento SQL

## Exercício 1

### a) O comando "ALTER TABLE Actor DROP COLUMN salary;" irá limpar toda os dados da colunas "salary".

### b) O comando "ALTER TABLE Actor CHANGE gender sex VARCHAR(6);" irá substituir o nome da coluna "gender" para "sex".

### c) O comando "ALTER TABLE Actor CHANGE gender gender VARCHAR(255);" irá alterar a capacidade de caracteres que podem ser inseridos na tabela "gender".

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
## Exercício 2

### a)
```
UPDATE Actor
SET name = "Vanessa Dias", birth_date = "2010-04-22"
WHERE id = "003";
```
### b)
```
UPDATE Actor
SET name = "JULIANA PAES" 
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE id = "005";
```
### c)
```
UPDATE Actor
SET id = "008",
name = "Irineu da Silva",
salary = 200000,
birth_date = "1999-03-23",
gender = "male"
WHERE id = "005"
```
### d) O query foi bem sucedido, mas não houve alteração porque o id selecionado não existe na coluna de "id".
```
UPDATE Actor
SET id = "008",
name = "Irineu da Silva",
salary = 200000,
birth_date = "1999-03-23",
gender = "male"
WHERE id = "999";
```
## Exercício 3

### a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
### b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```
## Exercício 4

### a)
```
SELECT MAX(salary) FROM Actor
```
### b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "male"
```
### c)
```
SELECT COUNT(gender) FROM Actor WHERE gender = "male"
```
### d)
```
SELECT SUM(salary) FROM Actor
```

#Exercício 5

### a) O último query faz uma tabela com a separação de "gender".

### b)
```
SELECT id, name FROM Actor ORDER BY name ASC
```
### c)
```
SELECT name FROM Actor ORDER BY salary ASC
```
### d)
```
SELECT name FROM Actor ORDER BY salary DESC LIMIT 3
```
### e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender
```
# Exercício 6

## a)
```
ALTER COLUMN evaluation ADD playing_limit_date DATE
```
## b)
```
ALTER TABLE `Movies` CHANGE evaluation evaluation FLOAT
```
## c)
```
UPDATE `Movies`
SET release_date_of = "2022-08-29" 
WHERE id = "004";

UPDATE `Movies`
SET release_date_of = "2023-10-07" 
WHERE id = "001";
```
## d) 
```
DELETE FROM Movie WHERE id = "001";

UPDATE Movie SET synopsis = "Testando alteração" WHERE id = "001";
```
