package com.singleton;

public class TestLogger { 
	public static void main(String args[])
	{
		Logger logger1=Logger.getInstance();
		Logger logger2=Logger.getInstance();
		logger1.log("First Message");
		logger1.log("Second Message");
		if(logger1==logger2)
		{
			System.out.println("Only one instance is created");
		}
		else
		{

			System.out.println("Multiple instances are created");
		}
	}

}
