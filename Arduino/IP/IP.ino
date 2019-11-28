/*
  Reference of the light sensor
*/
const int LDR = 16;
/*
  Reference of the buzzer
*/
const int PIN_BUZZER = 3;
/*
  Reference of the LED
*/
const int LED = 4;

const int d4 = 294;

void setup() {
  Serial.begin(9600);
  pinMode(LDR, INPUT);
  pinMode(LED, OUTPUT);
  pinMode(PIN_BUZZER, OUTPUT);
  digitalWrite(PIN_BUZZER, LOW);
}
void loop() {
  int LDRValue = analogRead(LDR);
  if (LDRValue <= 200) {
    digitalWrite(LED, HIGH);
    tone(PIN_BUZZER, d4, 250);
    Serial.println("Move");
    delay(500);
    digitalWrite(LED, LOW);
  }
}
