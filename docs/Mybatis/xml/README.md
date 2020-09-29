# XML方式基本用法

MyBatis 的**真正强大之处在于他的映射语句**，所以映射器的XML文件就显得相对简单。

同样功能，相比jdbc减少了95%的代码量



## 1. 调用方式

## 1.1 使用SqlSession 通过命名空间调用Mybatis方法

SqlSession 通过命名空间调用Mybatis方法

1. 首先需要用到命名空间和方法id组成的字符串来调用相应的方法
2. 当参数多于1个的时候，需要将参数方法一个map对象中
3. 通过map 传递多个参数

使用起来不方便，无法避免很多重复代码

### 1.2 使用接口调用方法（mybatis3.0支持）

使用接口调用方法会方便很多

1. Mybatis 使用Java的动态代理可以直接通过接口来调用相应的方法

   不需要提供接口的实现类，更不需要在实现类中使用sqlSession以通过命名空间间接调用

2. 当多个参数的时候，通过参数注解@Param设置参数的名字

   省去了手动构造map参数的过程

3. 在spring中使用的时候，可以配置为自动扫描所有的接口类，直接将接口注入需要用到的地方
