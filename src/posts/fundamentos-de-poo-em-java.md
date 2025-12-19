---
filename: fundamentos-de-poo-em-java
title: Fundamentos de POO em Java
date: 19/12/2025
description: Introdução aos conceitos básicos de programação orientada à objetos utilizando a linguagem Java.
tags:
  - java
  - fundamentos
---

[**Sumário**](#sumário)

Java é uma linguagem de programação amplamente utilizada em sistemas corporativos que necessitam de suporte para lógicas complexas e alta performance.

Sendo uma linguagem **orientada a objetos**, Java trabalha com conceitos fundamentais de programação orientada a objetos que são intrinsecos para o desenvolvimento de software nessa linguagem e em muitas outras. A compreensão desses conceitos é essencial para qualquer desenvolvedor que queira criar, manter ou escalar sistemas de todos os níveis de complexidade, do de mais fácil entendimento ao mais avançado. Esses conceitos incluem:

- Classes e Objetos
- Herança
- Polimorfismo
- Encapsulamento
- Abstração

# Hello, World

Antes de introduzir cada um desses conceitos de maneira sintetizada, preciso explicar primeiro como um arquivo é escrito e o porquê de cada pedaço de código em um mero "Hello, World!":

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }  
}
```
O código acima terá o seguinte output: `Hello, World!`. \
Nesse caso: o nome do arquivo teria que ser `HelloWorld.java` pois toda classe, essencialmente, deve ter seu próprio arquivo com o seu respectivo nome. Isso mantém uma organização constante, estruturando a *codebase* de forma elegante.

```java
public class HelloWorld {
```
Aqui nós declaramos primeiramente que a classe (`class`) devera ser pública (`public`), i.e. todo o conteúdo dela poderá ser acessado de fora dela mesma (isso será importante na hora de criar sistemas seguros).

```java
    public static void main(String[] args) {
```
Nessa linha nós declaramos o método `main` como `public` porém também declaramos esse método como `static`, que define o método como padrão ao criar novos objetos apartir da classe `Hello World` (você pode compreender melhor essa parte em [Classes](#classes)), e também declaramos o método como `void`, que define que esse método não retornará nada. O `main` é o ponto de entrada de qualquer aplicação Java, ou seja, é o primeiro método a ser executado quando o programa é iniciado. O parâmetro `String[] args` permite que argumentos sejam passados para o programa via linha de comando, possibilitando a personalização do comportamento do programa durante sua execução.

```java
        System.out.println("Hello, World!");
    }
```
Aqui é onde o output realmente acontece. \
Acontece que Java já possui métodos embutidos, assim como qualquer outra linguagem de programação. Primeiro é chamada a classe `System` que contém outras classes e métodos. Em seguida é chamado o `out` (classe para executar saídas no sistemas), e junto o `println` que é o método responsável por 'printar as informações passadas como argumentos, nesse caso: `"Hello, World"`.

Com isso em mente, vamos sair um pouco da prática e ir para a teoria...

# Classes e Objetos
Classes e Objetos são os pilares da **programação orientada a objetos**. Uma depende da outra para existir e formam um ótimo caminho pra construção de um bom sistema.

## Classes
Classes são templates, *blueprints* para **objetos**.\
Elas levam todas as caracteristicas que um objeto, uma instância de uma classe, ira possuir. Indo pra um lado um pouco mais abrangente: pense em uma classe como uma idéia superficial do que algo é, uma generalização. Ela serve de planta para o que um objeto será. \
Por exemplo: uma classe `Pessoa` terá caracteristicas, **propriedades**, como: nome, idade, endereço e etc... E também terá funções, **métodos**, como `Comer`, `Andar` e etc...

```java
class public Pessoa {
    String nome;
    int idade;
    String endereco;
}
```
Como visto acima: a declaração de variaveis, **atributos**, é feita através da tipagem do dado, `String`, e a nomenclatura do mesmo, `nome`. Dessa maneira nós podemos declarar esses campos na hora da criação da instância, **objeto**, da classe.

```java
class public Pessoa {
    String nome;
    ...

    public static String comer() {
        System.out.println("Comendo...");
    }

    public static String andar() {
        System.out.println("Andando...");
    }
}
```
Da mesma maneira que declaramos atributos, nós podemos declarar métodos. Note que os métodos também possuem um tipo de retorno, nesse caso `String`. Dessa forma todo objeto que for instanciado a partir da classe `Pessoa` possuirá esses atributos e métodos, facilitando a criação de "pessoas" no sistema.

Classes são essenciais para os fundamentos em java, pois elas são a base para a criação de objetos e a implementação dos conceitos de orientação a objetos.

## Objetos
Objetos são instâncias de classes.\
Eles são criados a partir das classes e possuem os atributos e métodos definidos na classe. Pense em objetos como a ideia generalizada (`classe`) sendo construída para algo mais específico.

```java
Pessoa pessoa1 = new Pessoa();
pessoa1.nome = "João";
pessoa1.idade = 25;
pessoa1.endereco = "Rua A, 123";
```
No exemplo acima, nós criamos um objeto `pessoa1` a partir da classe `Pessoa`. Utilizamos a palavra-chave `new` para instanciar a classe, criando assim um novo objeto. Em seguida, atribuímos valores aos atributos do objeto `pessoa1`.

## Comparação

Classes são como plantas arquitetônicas, enquanto objetos são as casas construídas a partir dessas plantas.\
Classes definem a estrutura e o comportamento, enquanto objetos são as instâncias concretas que utilizam essa estrutura e comportamento.

# Herança

Herança é um dos conceitos fundamentais da programação orientada a objetos.\
Ela permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse). Isso promove a reutilização de código e estabelece uma relação hierárquica entre classes. 

```java
class Animal {
    String nome;
    int idade;

    public void fazerSom() {
        System.out.println("Som genérico de animal");
    }
}
```
No exemplo acima, temos uma classe `Animal` que possui atributos `nome` e `idade`, além de um método `fazerSom`.

```java
class Cachorro extends Animal {
    public void fazerSom() {
        System.out.println("Latido");
    }
}
```
Aqui, a classe `Cachorro` **estende** a classe `Animal`, herdando seus atributos e métodos. A classe `Cachorro` também sobrescreve o método `fazerSom` para fornecer uma implementação específica para cachorros.

```java
Cachorro cachorro = new Cachorro();
cachorro.nome = "Rex";
cachorro.idade = 3;
cachorro.fazerSom(); // Output: Latido
```
No exemplo acima, criamos um objeto `cachorro` da classe `Cachorro`. Ele herda os atributos `nome` e `idade` da classe `Animal` e utiliza o método sobrescrito `fazerSom`.

# Polimorfismo

Polimorfismo é um conceito fundamental na programação orientada a objetos que permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum.\
Isso é possível através da herança e da sobrescrição de métodos, permitindo que o mesmo método se comporte de maneiras diferentes dependendo do objeto que o invoca. 

```java
class Animal {
    public void fazerSom() {
        System.out.println("Som genérico de animal");
    }
}
```
Acima, temos uma classe `Animal` com um método `fazerSom`.

```java
class Gato extends Animal {
    public void fazerSom() {
        System.out.println("Miau");
    }
}
```
Aqui, a classe `Gato` estende a classe `Animal` e sobrescreve o método `fazerSom` para fornecer uma implementação específica para gatos.

```java
class Cachorro extends Animal {
    public void fazerSom() {
        System.out.println("Latido");
    }
}
```
Da mesma forma, a classe `Cachorro` estende a classe `Animal` e sobrescreve o método `fazerSom` para cachorros.

```java
Animal meuAnimal;

meuAnimal = new Gato();
meuAnimal.fazerSom(); // Output: Miau

meuAnimal = new Cachorro();
meuAnimal.fazerSom(); // Output: Latido
```
No exemplo acima, criamos uma variável `meuAnimal` do tipo `Animal`. Podemos atribuir diferentes objetos (`Gato` e `Cachorro`) a essa variável e chamar o método `fazerSom`. O comportamento do método varia dependendo do tipo real do objeto, demonstrando o polimorfismo.

Com isso, notamos que o polimorfismo permite que métodos sejam utilizados de maneira flexível e dinâmica, promovendo a reutilização de código e facilitando a manutenção do sistema.

# Encapsulamento

Encapsulamento é um princípio fundamental da programação orientada a objetos que envolve a restrição do acesso direto aos dados de um objeto.\
Ele promove a proteção dos dados e a integridade do objeto, permitindo que o acesso e a modificação dos atributos sejam controlados através de métodos públicos.

```java
class ContaBancaria {
    private double saldo;
    private String titular;

    public ContaBancaria(String titular) {
        this.titular = titular;
        this.saldo = 0.0;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }

    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
        }
    }
}
```
No exemplo acima, a classe `ContaBancaria` possui atributos `saldo` e `titular` que são declarados como `private`, o que significa que eles não podem ser acessados diretamente de fora da classe.\
Em vez disso, métodos públicos como `depositar` e `sacar` são fornecidos para permitir o acesso controlado aos atributos.

```java
ContaBancaria minhaConta = new ContaBancaria("João");

minhaConta.depositar(1000.0);
minhaConta.sacar(500.0);
```
No exemplo acima, criamos um objeto `minhaConta` da classe `ContaBancaria` e utilizamos os métodos públicos para interagir com o saldo da conta, sem acessar diretamente o atributo `saldo`.

Assim, o encapsulamento ajuda a proteger os dados do objeto, garantindo que eles sejam manipulados de maneira segura e controlada. Além disso, ele promove a modularidade e a manutenção do código, facilitando futuras alterações na implementação interna da classe sem afetar o código externo que a utiliza.

# Abstração

Abstração é um conceito fundamental da programação orientada a objetos que envolve a simplificação de sistemas complexos, focando apenas nos aspectos essenciais e relevantes para o contexto atual.\
Ela permite que os desenvolvedores criem modelos mais gerenciáveis e compreensíveis, ocultando detalhes desnecessários.  

```java
abstract class Forma {
    abstract double calcularArea();
}
```
No exemplo acima, temos uma classe abstrata `Forma` que define um método abstrato `calcularArea`.\
Classes abstratas não podem ser instanciadas diretamente e servem como base para outras classes.

```java
class Circulo extends Forma {
    private double raio;
    public Circulo(double raio) {
        this.raio = raio;
    }

    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}
```
Aqui, a classe `Circulo` estende a classe abstrata `Forma` e fornece uma implementação concreta do método `calcularArea`.

```java
class Retangulo extends Forma {
    private double largura;
    private double altura;
    public Retangulo(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }

    public double calcularArea() {
        return largura * altura;
    }
}
```
Da mesma forma, a classe `Retangulo` estende a classe abstrata `Forma` e implementa o método `calcularArea`.

Dessa maneira, a abstração permite que os desenvolvedores trabalhem com conceitos mais simples e focados, facilitando a compreensão e a manutenção do código.\
Além disso, ela promove a reutilização de código e a flexibilidade, permitindo que diferentes implementações sejam tratadas de maneira uniforme através de interfaces comuns.

# Sumário
[[toc]]
