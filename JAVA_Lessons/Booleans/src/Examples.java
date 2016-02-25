import java.io.IOException;

public class Examples
{
    public static void main(String[] args) throws IOException
    {
            Boolean VasyaIsOlder18 = true;
            Boolean TimeIsLower23 = true;
            if(VasyaIsOlder18 && TimeIsLower23)  {
                System.out.println("Vodka allowed");
            }


            Boolean MishaHasLicense = true;
            Boolean DimaHasLicense = false;
            if(MishaHasLicense || DimaHasLicense)   {
                System.out.println("Friends will use car");
            }
            else  {
                System.out.println("Friend should go by bus");
            }


            Boolean PersonHasCellPhone = true;
            if(!PersonHasCellPhone)      {
                System.out.println("You are welcome to enter ");
            }
            else  {
                System.out.println("Don't enter!");
            }

            Integer MoneyAmount = 20000;
            Boolean HasPreviousVisa = true;
            Boolean HasConviction = false;
            if ((MoneyAmount > 45000  || HasPreviousVisa)  && (!HasConviction)) {
                System.out.println("Visa should be granted.");
            }
            else    {
                System.out.println("Visa denied!");
            }
    }
}