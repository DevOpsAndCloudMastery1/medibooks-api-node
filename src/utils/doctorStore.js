
const doctors = [
{
    "doctors": [
        {
            "id": "1",
            "name": "Dr. John Smith",
            "img": "images/doctor1.jpg",
            "specialization": "Cardiologist",
            "experience": "15 years",
            "location": "MediHealth Hospital, New York",
            "description": "Dr. John Smith is a renowned cardiologist specializing in advanced heart care and minimally invasive surgeries."
        },
        {
            "id": "2",
            "name": "Dr. Emma Davis",
            "img": "images/doctor2.jpg",
            "specialization": "Neurologist",
            "experience": "10 years",
            "location": "NeuroCare Clinic, Chicago",
            "description": "Dr. Emma Davis specializes in treating complex neurological disorders, including epilepsy, migraines, and neurodegenerative diseases."
        },
        {
            "id": "3",
            "name": "Dr. Michael Brown",
            "img": "images/doctor3.jpg",
            "specialization": "Pediatrician",
            "experience": "8 years",
            "location": "Happy Kids Pediatrics, Los Angeles",
            "description": "Dr. Michael Brown focuses on providing compassionate care for children of all ages, with expertise in child nutrition and immunizations."
        },
        {
            "id": "4",
            "name": "Dr. Olivia Wilson",
            "img": "images/doctor4.jpg",
            "specialization": "Orthopedic Surgeon",
            "experience": "12 years",
            "location": "Advanced Orthopedic Center, San Francisco",
            "description": "Dr. Olivia Wilson specializes in joint replacement and sports injuries."
        },
        {
            "id": "5",
            "name": "Dr. Liam Johnson",
            "img": "images/doctor5.jpg",
            "specialization": "Dermatologist",
            "experience": "9 years",
            "location": "SkinCare Specialists, Miami",
            "description": "Dr. Liam Johnson treats acne, eczema, and skin cancer, ensuring healthy skin for his patients."
        },
        {
            "id": "6",
            "name": "Dr. Sophia Martinez",
            "img": "images/doctor6.jpg",
            "specialization": "Gynecologist",
            "experience": "14 years",
            "location": "Women’s Wellness Center, Houston",
            "description": "Dr. Sophia Martinez specializes in women's health, including prenatal care and fertility treatments."
        }
    ]
}
];
const getDoctors = () => doctors;

module.exports = { getDoctors };
