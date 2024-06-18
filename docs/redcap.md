# RedCap and Hyperate4Health Protocols

## Hyperate4Health Protocols
1. Download HypeRate4Health onto your computer
2. Open App
3.	Enter HypeRate ID ex: 219E (given by the participant)
4.	Enter Subject ID ex: 08 (for techs08)
5.	Enter path (i.e. where you want the .csv file to be saved on your computer) ex: /Users/madeleineperko/Desktop
6.	Click “Sign In”
7.	To start recording the session, click “Start”
8.	To stop recording the session, click “Quit” → this will SAVE the session to the path you designated
9.	Close Hyperate4Health application
10.	Find the saved file, and rename it “hr_sub_xx_dxx” ex: hr_sub_08_d01.csv
(for techs08, intervention 01)
11.	Upload the file to: CNELabFiles/TECHS/intervention_hr_files/techsXX in OneDrive
NOTE: Participants do NOT need to share their screen.You can see their HR live using the app or on the website using the participants Subject ID
ex: https://app.hyperate.io/219E

## REDCap Protocols
### Start of the Session:
**Date of Intervention (MM/DD/YYYY)** = Date that intervention occurs on.
  Example: If the intervention occurred on February 3nd, 2024, enter 02/03/2024
  
**24-Hour Start Time of HR Monitoring (HH:MM)** = Time of day when intervention starts. Do NOT enter AM or PM; use 24-hour time.
  Example: if the intervention started at 3:30, enter: 15:30

### Data Collection:

For each 5-minute check-in, record:
1. Heart Rate
2. BORG
3. Symptoms
4. CIF Symptom Checklist Score

**5 Minute Check-Ins = Record Data (listed above)**

These occur at:
-	Baseline at 0:00 → this score serves as a baseline for the participants symptom status prior to the intervention
-	5:00, 10:00, 15:00, 20:00, 25:00, 30:00 → determine whether the intensity of the intervention needs to be scaled back. This determination is made if the participant reaches their symptom threshold (i.e. baseline CIF score + 3 = symptom threshold)

**Symptoms, CIF Symptom Checklist Score, and Symptom Threshold**
-	***Do NOT leave a symptom blank.*** Select a bubble for each symptom listed (i.e if participant does not report a symptom, still denote that symptom with a bubble → “0”)
-	**CIF Symptom Checklist Score** = the SUM of the symptoms reported at the corresponding 5-minute interval check-in
-	Subsequent check-ins determine whether the intensity of the intervention needs to be scaled back. This determination is made if the participant reaches their symptom threshold (i.e. baseline CIF score + 3 = symptom threshold)
-	If a participant reaches their symptom threshold, ALERT the intervention leader so intensity reduction protocol can be initiated
 
**Symptom Substitute**

If a participant reports a symptom that is not a listed option, choose a symptom on the RedCap list that best resembles the reported symptom and that the participant did not report experiencing. Then record the severity of the reported symptom using the bubbles, and click the comment tab to record the intended symptom.

Example:
-	Difficulty Concentrating is not a listed symptom in the Minute-5 Check-in Symptom List.
-	If the participant reports Difficulty Concentrating with a severity of 2, then click an option that was reported as severity 0, such as Feeling in a Fog. Report severity 2 in the Feeling in a Fog row and note the symptom as Difficulty
Concentrating in the comment section
 
 
### End of the Session:
Cessation Time = Amount of time (minutes) the intervention ran for.
Example A: The intervention ran for an entire 30 minutes (goal of programming)
Cessation Time: 30:00
Example B: Intervention was STOPPED due to symptoms increasing beyond Symptom Threshold, and despite intensity reduction protocol (protocol when Symptom Threshold is met; described in table below).
Symptom Threshold Protocol during intervention
1 & 2 = completed programming
-	cessation time: 30:00
3 = intervention stopped early due to increasing symptoms
	-	cessation time:
>30:00	1.
2.
-
3.
-
-	If symptom threshold is reached (baseline CIF symptom score + 3),
●	participant takes a 1-minute break, then,
●	the intervention leader reduces the exercise intensity => participant HR should not exceed
60% their HR max
If session continues until the end of programming, cessation time: 30:00
If symptoms increase again,
●	1-minute break, then,
●	reduce to 40% HR max (~100-110 bpm) If session continues until the end of programming, cessation time: 30:00
If symptoms still increase, stop exercise and start the cool down.
cessation time: minutes the session ran for Example: if exercises were stopped at minute 20, then cessation time would be at minute 25 (after cool down), cessation time: 25:00
HR Max: Determined based on VO2 submaximal testing (obtained during the participant’s baseline session).
Example C: Intervention had to be shortened due to the intervention starting late.
-	Goal of AEROBIC interventions = HR 65-80% of HR max for 20 minutes So, if the intervention must be shortened due to time constraints, maximize the exercise component by SHORTENING (not eliminating) warm up and cool down:
(Ex: 02:30 minute warm up, 20:00 minute intervention, 02:30 minute cool down).
Cessation Time: 25:00
	+	add a comment about why the intervention was shortened.
Example D: Participant leaves early.
	-	If the participant leaves early,
Cessation Time: 26:00 Time to Symptom Threshold: 26:00
Example E: Intervention took longer than 30:00 (usually should not occur).
-	If Cessation Time is 34:00 (participant completes all of the planned programming but the session took longer than 30:00) then Time to Symptom Threshold should also be 34:00.
-	If the intervention goes over 30:00 because the participant had to leave the screen (get water, answer the door/phone etc) PAUSE your stopwatch! -	In this scenario, if stopwatch is paused, intervention itself will still likely be 30:00 minutes long
GOAL of interventions = get to all the programming possible within 30 minutes
-	BEST: 20 minutes of aerobic exercise (HR at 65-80% HRmax) with 5 min warm-up and 5 min cool-down
-	2nd best: 20 minutes of aerobic exercise with shortened warm-up and cool down
-	3rd best: shortened aerobic exercise with shortened warm-up and cool down
24-Hour End (HH:MM) = Time of day when the intervention ends. Do not enter AM or PM.
Example A: If the intervention ended at 3:35, then enter 15:35.
Cessation Symptom Score = the symptom score that the participant reports at the time when the intervention ends.
NOTE: Cessation Symptom Score is the SAME as 30:00 CIF symptom checklist score if the programming was completed and the session ended at 30 minutes.
Example A: If the participant reported 0 symptoms when the intervention ended, note 0.
 
Example B: If the participant reported 2 symptoms when the intervention ended, note 2.
 
Example C: If the participant reports a symptom score sum of 7 at 15:00, but reports a score of 6 when the intervention ends at minute 17, then cessation symptom score: 6 Example D: If the intervention ended early, for example at 25:00, record the SAME CIF Symptom Checklist Score for the Cessation Symptom Score.
 
Time to Symptom Threshold = the intervention time elapsed when the participant reports experiencing symptoms totaling 3 points higher than their baseline symptom score (= Symptom Threshold).
Example A: If the participant did NOT reach symptom threshold (baseline score + 3) during the intervention, then record 30:00.
Cessation time = 30:00
Time to symptom threshold = 30:00
Example B: If the participant completes all of the planned programming at 30:00, but reported symptom increase BETWEEN 5-minute check-ins such that symptom threshold is met (participant reports symptoms totaling 7 at minute 17:00, and baseline symptoms totaled 4) then:
Cessation time = 30:00
Time to symptom threshold = 17:00
Example C: If the participant reports a symptom threshold at the 15:00 minute check-in, and the score continues to increase despite 2 attempts to reduce intensity and must be ended at minute 20:00,
Cessation time = 20:00
Time to symptom threshold = 15:00
Resistance
Version of intervention (A/B/C)
Example: If the intervention is listed as Version A in the Scheudling_info.docx, record: Resistance: A
SKIPPED SESSIONS:
If a participant misses a scheduled session, attempt to reschedule another session WITHIN the week (should complete 3 sessions EVERY week).
If a participant does NOT complete 3 interventions within a week…
Example: If techs_12 was scheduled to complete interventions 27, 28 and 29 within a calendar week, but did not complete 28 and 29 within the week, the next intervention they complete the next week (#30 in the Scheduling_info.docx) should be recorded:
	-	In form #28 in RedCap
RedCap → DO NOT leave blank forms. Complete the NEXT available form.
	CORRECT:	WRONG:
 
Scheduling_info.docx → Mark interventions not completed within the week as missed
Intervention Tab:
 
Scheduling Progress Tab:
 
!!! This will result in a mismatch between the intervention# on RedCap (#28) and the Scheudling_info.docx (#30) on OneDrive...
THAT IS OK!
	●	For recording intervention## in HypeRate, use the RedCap number.
