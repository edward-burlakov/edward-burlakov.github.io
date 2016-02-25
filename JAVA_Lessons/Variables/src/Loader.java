/**
 * Created by bes on 08.01.2016.
 */
public class Loader
{
            public static void main(String[] args)
            {
                Integer a = 58;
                Double  d = 12.18;
                Double  r = 15.02;
                Double  q = d * r;
                Double  f = q / r + 10*a;

                String atr1 = "Some text ";
                String atr2 = "bla bla bla" ;
                String atr3 = atr1 + atr2;

                System.out.println("TEXT:  " + atr3 +"\n"+ f);
            }
}
