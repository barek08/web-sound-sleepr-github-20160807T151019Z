// This #include statement was automatically added by the Particle IDE.
#include "Adafruit_DHT/Adafruit_DHT.h"


    // DHT parameters

    #define DHTPIN 5

    #define DHTTYPE DHT11

    // Variables

    int temperature;

    int humidity;

    // int light;

    // Pins

    // int light_sensor_pin = A0;

    // DHT sensor

    DHT dht(DHTPIN, DHTTYPE);


int sensorPin = 0;
double alpha = 0.75;
int period = 100;
double change = 0.0;
double minval = 0.0;
double oldValue = 0;

void setup ()
{
  Serial.begin (9600);
  double oldChange = 0;
dht.begin();
 
}
void loop ()
{
 
   int rawValue = analogRead (sensorPin);
    double value = alpha * oldValue + (1 - alpha) * rawValue;
    //             0.75*____+(0.25*x)
 
    Serial.print (rawValue);
    Serial.print (",");
    Serial.println (value);
    oldValue = value;
    //Particle.publish("D",String(rawValue),360,PRIVATE);
    //Particle.publish("V",String(value),360,PRIVATE);

    delay (period);
        
temperature = dht.getTempCelcius();

        // Humidity measurement

        humidity = dht.getHumidity();

        Particle.publish("Temperature (°C)",String(temperature),360,PRIVATE);

        Particle.publish("Humidity (%)",String(humidity),360,PRIVATE);


        Particle.variable("temperature", temperature);

        Particle.variable("humidity", humidity);


        Serial.println("Temperature: " + String(temperature) + " °C");

        Serial.println("Humidity: " + String(humidity) + "%");

        delay(1500);


}
