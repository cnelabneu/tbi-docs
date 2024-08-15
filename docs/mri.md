# MRI PROTOCAL (TECHS/Roybal)
## Prior to MRI session
1. Materials needed

      a) wedge
   
      b) small pillow between legs
   
      c) head pillow

      d) table and pillow sheets

      e) earplugs

      f) headphones

      g) covers for headphones
   
      h) gloves to cover the squeeze ball 

      i) lateral pillows 

      j) head coil 

      k) blanket
<img width="486" alt="image" src="https://github.com/user-attachments/assets/31465ce3-837a-449c-ba56-3f799d04560a">



3. Procedures
   
         a) Place the wedge and the head pillow the examination table.
     
         b) Cover the examination table and pillows with a sheet.
     
         c) Prepare between leg pillow covered with a sheet.
     
         d) Protect the squeeze ball with a glove.
     
         e) Prepare the earplugs (leave them on the examination table and
         then it’s easy to remember)
     
         f) Protect the headphones with the covers and place them on the
         examination table too.
   

5. Sign MRI safety screening form (10 min)
6. Participant gets change, we provide them a gown.
7. Fred runs the last safety step, revise no metals, etc.

## MRI Protocal

1. Participant enters the MRI room: 
        a) Provide earplugs to the participant. Instruction: “squeeze the earplug tip and place it in your ear channel, you can also pull up the ear lobe to help you”  
        b) Invite the participant to lie on the MRI examination table.  
        c) Arrange the participant position, move the wedge and the legs/head pillows if needed.  
        d) Provide the participant with the squeeze ball and ask them to try it once. Disconnect the alarm.  
        e) Provide headphones “You will hear us through them.” Red in their right side.  
        f) Cover the participant with a blanket. 
        g) Adjust participants position to the light line (for this procedure, ask them to close their eyes).  
        h) Confirm the participant can see the screen from their position.  
        i) Place the head coil smoothly. 
        j) Place the lateral pillows on both sides (2 people needed). 
        k) Get the participant into the scan. 
        l) Ask one last time if they are ok before leaving the room and tell them you will keep in touch from the other room.
  
2. Instructions during scans:   
Pull up fixation cross.   

  ### 1. “Please hold still and fixate on the cross on the screen. This scan will be about 8 minutes.”  
      - Anat-scout_ses-pre  
      - fmap_AP  
      - fmap_PA  
      - Func_task-rest  
 
FIRMM on the third pc, to check during the rs scan how the head movement and fmd is for our participant. Open the terminal and enter the code that is already there to open the program.  
 
 
  ### 2. “For the remainder of the scan, you can relax, hold still, and keep your eyes open or closed. The next scan will be about 7 minutes.” They can close their eyes now and relax, but remind them to not fall sleep! 
      - Anat-t1  
 
 ### 3. Check in- “The next scan will be about 12 minutes.”  
      - fmap-dMRI_AP  
      - fmap-dMRI_PA  

## After MRI session: 

1. Use gloves and disinfecting wipes to clean up the MRI examination table and rest of the material used during the scan (pillows, wedge, squeeze ball, earphones, etc). Sheets can be placed outside the scan room, in the specific container for laundry.   
2. To export data:  
      1. Click on subject (right click) export to dicom files, you will see a progress line under “activity.”  
      2. Export study- Documents/Morris/Roybal 
      3. Wait for exporting process to finish.  
      4. Open terminal   
      5. cd Documents/Morris/Roybal/  
 
      scp -r ./file2upload tinney.e@xfer.discovery.neu.edu:/work/cnelab/TECHS/MRI/raw/  
 
      scp -r ./Roybal_01 m.espaa@xfer.discovery.neu.edu:/work/cnelab/roybal/MRI/sourcedata/  
 
