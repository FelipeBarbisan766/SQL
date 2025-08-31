CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100),
    cpf CHAR(11) UNIQUE,
    cidade VARCHAR(50),
    estado CHAR(2)
);

CREATE TABLE Produto (
    id_produto INT PRIMARY KEY,
    nome VARCHAR(100),
    preco_unit DECIMAL(10,2)
);

CREATE TABLE Pedido (
    id_pedido INT PRIMARY KEY,
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE Pedido_Produto (
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    PRIMARY KEY (id_pedido, id_produto),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES Produto(id_produto)
);


INSERT INTO Cliente VALUES (1, 'Carlos Lima', '12345678900', 'Campinas', 'SP');
INSERT INTO Cliente VALUES (2, 'Ana Ribeiro', '98765432100', 'Ribeirão', 'SP');

INSERT INTO Produto VALUES (1, 'Caneta Azul', 2.50);
INSERT INTO Produto VALUES (2, 'Lápis Preto', 1.00);
INSERT INTO Produto VALUES (3, 'Caderno A4', 15.00);

INSERT INTO Pedido VALUES (1, 1);
INSERT INTO Pedido VALUES (2, 2);

INSERT INTO Pedido_Produto VALUES (1, 1, 10); 
INSERT INTO Pedido_Produto VALUES (1, 2, 5);  
INSERT INTO Pedido_Produto VALUES (2, 3, 2);  

SELECT * FROM Cliente WHERE cidade = 'Campinas';
SELECT nome_cliente FROM Cliente;
SELECT * FROM Pedido;
SELECT nome_produto, preco_unit FROM Produto;


UPDATE Produto SET preco_unit = 1.20 WHERE nome = 'Lápis Preto';

DELETE FROM Pedido WHERE id_pedido = 2;
