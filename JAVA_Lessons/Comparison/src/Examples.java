/**
 * Created by bes on 09.01.2016.
 */
public class Examples {

    public static void main(String[] args)
    {
        String a ="Misha";
        String b= "Mishaqqqq";

        Boolean  D  = a.equals(b);
        System.out.println(D);

        Integer E = b.compareTo(a);

        System.out.println(E);

        Boolean VasyaHasLicense = false;

        String name = VasyaHasLicense ? "Vasya" : "Not Vasya";

        System.out.println( name + " will drive the car.");


    }
}