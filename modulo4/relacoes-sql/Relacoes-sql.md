# Relações SQL

## Exercício 1

### a) Ela não diz respeito, especificamente, a uma tabela, mas sim a um relacionamento entre tabelas.

### b)
```
INSERT INTO `Rating`
VALUES
("001","show de bola", 7, "001");
```

### c) A foreign key não identifica o "movie_id" por que ele não é existente na tabela de filmes. 

### d)
```
ALTER TABLE Movie DROP COLUMN evaluation;
```
### e) como as avaliações estão em outra tabela, antes de apagar o filme de movie tem que apagar a outra que está ligada pelo foreign key

## Exercício 2

### a) Sâo duas tabelas que podem ser acessadas e ter uma única funcionalidade.

### b)
```
INSERT INTO `MovieCast`
VALUES
("001","001");
```
### c) já que nenhum dos dois ids são existentes da falha de key

### d) não é possível para apagar um valor que tenha a foreign key é necessário excluir a table que o valor está primeiro.

## 3) Exercício 3

### a) ON: Uma condição pela qual as tabelas serão juntadas.

### b)
```
SELECT Movie.id, Movie.title, Rating.rate from `Movie`
INNER JOIN `Rating` ON Movie.id = Rating.movie_id;
```


