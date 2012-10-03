package bdd.calculator;

public class Calculator{
    private int a;
    private int b;
    
    public void setValues(int a, int b){
        this.a = a;
        this.b = b;
    }
    
    public int add(int a,int b){
        return a+b;
    }
    public int substract(int a, int b){
        return a-b;
    }
    
    public int multiply(int a, int b){
        return a*b;
    }
    public int divide(int a, int b){
        return a/b;
    }


}