import javax.swing.*;

/**
Created by bes on 31.12.2015.
**/
public class Loader
{
    public static void main(String[] args)
    {
        JFrame frame = new JFrame();
        //Set window size
        frame.setSize(800, 600);

        //Get the frame centered . Can be used with setSize() and pack()
        frame.setLocationRelativeTo(null);

        // Set header of the window ;
        frame.setTitle("Our first window application");
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}


