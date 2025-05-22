package app.models;

import java.time.LocalDateTime;

public class Feedback {
    private String id;
    private Customer customer;
    private Appointment appointment;
    private int rating;
    private String comment;
    private LocalDateTime feedbackTime;

    public Feedback(String id, Customer customer, Appointment appointment, int rating, String comment) {
        this.id = id;
        this.customer = customer;
        this.appointment = appointment;
        this.rating = rating;
        this.comment = comment;
        this.feedbackTime = LocalDateTime.now();
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
                ", customer=" + customer.getName() +
                ", appointment=" + appointment.getId() +
                ", rating=" + rating +
                ", comment='" + comment + '\'' +
                ", feedbackTime=" + feedbackTime +
                '}';
    }
} 