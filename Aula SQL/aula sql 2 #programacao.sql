-- Exemplo 1. Selecionando todas as linhas e colundas da:

-- a) tabela pedidos
SELECT * FROM pedidos;

-- b) tabela clientes
SELECT * FROM clientes;


-- Exemplo 2. Selecionar apenas algumas colunas da tabela clientes

SELECT
	ID_Cliente AS 'ID Cliente',
    Nome AS 'Nome do Cliente',
    Data_Nascimento AS 'Data de Nascimento',
    Email AS 'E-mail do Cliente'
FROM Clientes;


-- Exemplo 3. Selecionar apenas as 5 primeiras linhas da tabela de produtos

SELECT * FROM produtos
LIMIT 8;


-- Exemplo 4. Selecionar todas as linhas da tabela produtos, MAS... ordenando pela coluna Preco_Unit

SELECT * FROM produtos 
ORDER BY Preco_Unit;
