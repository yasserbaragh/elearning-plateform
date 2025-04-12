package app.gs.dto;

import java.util.List;

public class QuestionDTO {
    private String text;
    private List<ResponseDTO> responses;

    // Getters and setters
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public List<ResponseDTO> getResponses() { return responses; }
    public void setResponses(List<ResponseDTO> responses) { this.responses = responses; }
}

