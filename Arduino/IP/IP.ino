/*
* Reference of the light sensor
*/
const int LDR = 16;
/*
* Reference of the LED
*/
const int LED = 4;
void setup() {
  Serial.begin(9600);
  pinMode(LDR, INPUT);
  pinMode(LED, OUTPUT);
}
void loop() {
  int LDRValue = analogRead(LDR);
  if(LDRValue <= 200){
    digitalWrite(LED, HIGH);
    Serial.println("Move");
    delay(500);
    digitalWrite(LED, LOW);
  }
}
