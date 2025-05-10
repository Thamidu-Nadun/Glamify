package com.glamify.app.dto;

import java.util.List;

public class CustomerDTO {
    private String id;
    private String name;
    private String email;
    private String contactNumber;
    private List<String> appointmentIds;
    private List<String> feedbackIds;

    // Default constructor for JSON serialization
    public CustomerDTO() {}

    public CustomerDTO(String id, String name, String email, String contactNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContactNumber() { return contactNumber; }
    public void setContactNumber(String contactNumber) { this.contactNumber = contactNumber; }

    public List<String> getAppointmentIds() { return appointmentIds; }
    public void setAppointmentIds(List<String> appointmentIds) { this.appointmentIds = appointmentIds; }

    public List<String> getFeedbackIds() { return feedbackIds; }
    public void setFeedbackIds(List<String> feedbackIds) { this.feedbackIds = feedbackIds; }
} 