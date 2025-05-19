package com.glamify.app.models;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

public class Feedback {
    private String id;

    @NotNull(message = "Customer is required")
    private Customer customer;

    @NotNull(message = "Appointment is required")
    private Appointment appointment;

    @NotNull(message = "Rating is required")
    @Min(value = 1, message = "Rating must be at least 1")
    @Max(value = 5, message = "Rating must be at most 5")
    private int rating;

    @Size(max = 500, message = "Comment must not exceed 500 characters")
    private String comment;

    @NotNull(message = "Feedback time is required")
    private LocalDateTime feedbackTime;

    // Default constructor for JSON deserialization
    public Feedback() {}

    public Feedback(String id, Customer customer, Appointment appointment, int rating, String comment, LocalDateTime feedbackTime) {
        this.id = id;
        this.customer = customer;
        this.appointment = appointment;
        this.rating = rating;
        this.comment = comment;
        this.feedbackTime = feedbackTime;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public Customer getCustomer() { return customer; }
    public void setCustomer(Customer customer) { this.customer = customer; }

    public Appointment getAppointment() { return appointment; }
    public void setAppointment(Appointment appointment) { this.appointment = appointment; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public LocalDateTime getFeedbackTime() { return feedbackTime; }
    public void setFeedbackTime(LocalDateTime feedbackTime) { this.feedbackTime = feedbackTime; }

    @Override
    public String toString() {
        return "Feedback{" +
                "id='" + id + '\'' +
                ", customer=" + (customer != null ? customer.getId() : "null") +
                ", appointment=" + (appointment != null ? appointment.getId() : "null") +
                ", rating=" + rating +
                ", comment='" + comment + '\'' +
                ", feedbackTime=" + feedbackTime +
                '}';
    }
} 