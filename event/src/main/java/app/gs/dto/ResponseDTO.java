package app.gs.dto;

public class ResponseDTO {
    private String text;
    private boolean isCorrect;

    // Getters and setters
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public boolean isCorrect() { return isCorrect; }
    public void setCorrect(boolean correct) { isCorrect = correct; }
}

