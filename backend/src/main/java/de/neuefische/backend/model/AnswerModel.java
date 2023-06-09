package de.neuefische.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AnswerModel {
    String sessionID;
    String questionID;
    Integer answer;
}
