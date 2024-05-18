// Import necessary modules
const NotificationService = require('./notificationService');

// Function to send notification
exports.sendNotification = async (userId, message) => {
    try {
        // Example: Send notification using a hypothetical notification service
        await NotificationService.send(userId, message);
        console.log(`Notification sent to user ${userId}: ${message}`);
    } catch (error) {
        throw new Error('Failed to send notification');
    }
};
