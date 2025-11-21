@Ruslan8482 ➜ /workspaces/-8482 (main) $ cd unix_practice
bash: cd: unix_practice: No such file or directory
@Ruslan8482 ➜ /workspaces/-8482 (main) $ cd unix_practice_setup.sh
bash: cd: unix_practice_setup.sh: Not a directory
@Ruslan8482 ➜ /workspaces/-8482 (main) $ C:\Users\rendody\Desktop\-8482-main\unix_practice_setup.sh
bash: C:UsersrendodyDesktop-8482-mainunix_practice_setup.sh: command not found
@Ruslan8482 ➜ /workspaces/-8482 (main) $ chmod +x unix_practice_setup.sh
@Ruslan8482 ➜ /workspaces/-8482 (main) $ ./unix_practice_setup.sh
=== Создание учебной среды Unix ===

Создание новой учебной среды в директории: unix_practice
Создание домашней директории...

=== Учебная среда создана успешно! ===

Структура создана в директории: unix_practice

Основные директории:
  - home/student/          Домашняя директория пользователя
  - home/student/Documents Документы
  - home/student/Downloads Загрузки
  - home/student/Pictures  Изображения
  - home/student/Projects  Проекты
  - etc/                   Конфигурационные файлы
  - var/                   Переменные данные и логи
  - usr/                   Пользовательские программы
  - tmp/                   Временные файлы

Для начала работы выполните:
  cd unix_practice

Откройте файл unix_practice_tasks.md для просмотра заданий

@Ruslan8482 ➜ /workspaces/-8482 (main) $ cd unix_practice
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ 1.1
bash: 1.1: command not found
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ pwd
/workspaces/-8482/unix_practice
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ /workspaces/-8482/unix_practice
bash: /workspaces/-8482/unix_practice: Is a directory
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ 1.2
bash: 1.2: command not found
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ ls
etc  home  opt  tmp  usr  var
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ ls -l
total 24
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:10 etc
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:10 home
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:10 opt
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 tmp
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 usr
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 var
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ ls -la
total 32
drwxrwxrwx+ 8 codespace codespace 4096 Nov 21 15:10 .
drwxrwxrwx+ 4 codespace root      4096 Nov 21 15:10 ..
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:10 etc
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:10 home
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:10 opt
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 tmp
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 usr
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 var
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ 6
bash: 6: command not found
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ 1.3
bash: 1.3: command not found
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ cd home/student
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ pwd
/workspaces/-8482/unix_practice/home/student
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd .
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd ..
@Ruslan8482 ➜ /workspaces/-8482/unix_practice/home (main) $  cd home/student
bash: cd: home/student: No such file or directory
@Ruslan8482 ➜ /workspaces/-8482/unix_practice/home (main) $ cd /student
bash: cd: /student: No such file or directory
@Ruslan8482 ➜ /workspaces/-8482/unix_practice/home (main) $ cd student
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd Documents/Work
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ ls
presentation.txt  report_feb.txt  report_jan.txt
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ 1.4
bash: 1.4: command not found
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ cd ../..
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd ../..
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ cd home/student/Pictures/Vacation
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ ls
beach.jpg  mountains.jpg
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ cs ../../../..
bash: cs: command not found
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ cd ../../../..
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ cd home/student/Projects/Python/scripts
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ 2.1
bash: 2.1: command not found
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ cd ../..
@Ruslan8482 ➜ .../unix_practice/home/student/Projects (main) $ cd ../
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd Docements/Work
bash: cd: Docements/Work: No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd Documents/Work
\@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ cat report_jan.txt
Отчёт за январь 2024
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ cat report_
report_feb.txt  report_jan.txt  
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ cat report_jan.txt report_feb.txt 
Отчёт за январь 2024
Отчёт за февраль 2024
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ 2.2
bash: 2.2: command not found
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ cd ../../../var/log
bash: cd: ../../../var/log: No such file or directory
@Ruslan8482 ➜ .../home/student/Documents/Work (main) $ cd ../..
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd ../..
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ cd var/log
@Ruslan8482 ➜ .../-8482/unix_practice/var/log (main) $ head -n 5 system.log
System started
@Ruslan8482 ➜ .../-8482/unix_practice/var/log (main) $ tail -n 5 system.log
System started
@Ruslan8482 ➜ .../-8482/unix_practice/var/log (main) $ cat error.log
Error: sample error
@Ruslan8482 ➜ .../-8482/unix_practice/var/log (main) $ Error: sample error
bash: Error:: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/var/log (main) $ 3.1
bash: 3.1: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/var/log (main) $ cd ../..
@Ruslan8482 ➜ /workspaces/-8482/unix_practice (main) $ cd home/student
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $  mkdir MyFirstFolder
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls
Backup   Documents  Learning  MyFirstFolder  Projects   Videos          important_file.txt  old_file_2021.txt
Desktop  Downloads  Music     Pictures       TestFiles  archive_me.txt  old_file_2020.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mkdir -p MyProject/WebDev/HTML
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls -r MeProjects
ls: cannot access 'MeProjects': No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls -r MyProjects
ls: cannot access 'MyProjects': No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls -r MyProject
WebDev
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mkdir -r Practice/Week1/Day1
mkdir: invalid option -- 'r'
Try 'mkdir --help' for more information.
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mkdir -p Practice/Week1/Day1
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 3.2
bash: 3.2: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ touch test.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ touch file1.txt file2.txt file3.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls -l
total 68
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 Backup
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 Desktop
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 Documents
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 Downloads
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 Learning
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 Music
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:22 MyFirstFolder
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:23 MyProject
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 Pictures
drwxrwxrwx+ 3 codespace codespace 4096 Nov 21 15:24 Practice
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 Projects
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 TestFiles
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 Videos
-rw-rw-rw-  1 codespace codespace   14 Nov 21 15:10 archive_me.txt
-rw-rw-rw-  1 codespace codespace    0 Nov 21 15:25 file1.txt
-rw-rw-rw-  1 codespace codespace    0 Nov 21 15:25 file2.txt
-rw-rw-rw-  1 codespace codespace    0 Nov 21 15:25 file3.txt
-rw-rw-rw-  1 codespace codespace   15 Nov 21 15:10 important_file.txt
-rw-rw-rw-  1 codespace codespace   19 Nov 21 15:10 old_file_2020.txt
-rw-rw-rw-  1 codespace codespace   19 Nov 21 15:10 old_file_2021.txt
-rw-rw-rw-  1 codespace codespace    0 Nov 21 15:25 test.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ touch task1.txt task2.txt task3.txt task4.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls
Backup     Downloads  MyFirstFolder  Practice   Videos          file2.txt           old_file_2020.txt  task2.txt  test.txt
Desktop    Learning   MyProject      Projects   archive_me.txt  file3.txt           old_file_2021.txt  task3.txt
Documents  Music      Pictures       TestFiles  file1.txt       important_file.txt  task1.txt          task4.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 3.3
bash: 3.3: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rm text.txt
rm: cannot remove 'text.txt': No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rm test.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rm file1.txt file2.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls
Backup     Downloads  MyFirstFolder  Practice   Videos          important_file.txt  task1.txt  task4.txt
Desktop    Learning   MyProject      Projects   archive_me.txt  old_file_2020.txt   task2.txt
Documents  Music      Pictures       TestFiles  file3.txt       old_file_2021.txt   task3.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mkdir EmptyFolder
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rmdir EmptyFolder
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rm -r MyFirstFolder
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rm task1.txt task2.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rmdir -r Practice
rmdir: invalid option -- 'r'
Try 'rmdir --help' for more information.
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rm -r Practice
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 4.1
bash: 4.1: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd Documents/Personal/
@Ruslan8482 ➜ .../home/student/Documents/Personal (main) $ cp notes.txt notes_backup.txt
@Ruslan8482 ➜ .../home/student/Documents/Personal (main) $ ls
notes.txt  notes_backup.txt  shopping_list.txt
@Ruslan8482 ➜ .../home/student/Documents/Personal (main) $ cp shopping_list.txt  ../../Desktop/
@Ruslan8482 ➜ .../home/student/Documents/Personal (main) $ ls ../../Desktop/
important.txt  quick_notes.txt  shopping_list.txt  todo.txt
@Ruslan8482 ➜ .../home/student/Documents/Personal (main) $ cd ..
@Ruslan8482 ➜ .../unix_practice/home/student/Documents (main) $ cd Personal/
@Ruslan8482 ➜ .../home/student/Documents/Personal (main) $ ls
notes.txt  notes_backup.txt  shopping_list.txt
@Ruslan8482 ➜ .../home/student/Documents/Personal (main) $ cd ..
@Ruslan8482 ➜ .../unix_practice/home/student/Documents (main) $ cd School/
\@Ruslan8482 ➜ .../home/student/Documents/School (main) $ ls
homework.txt  math_notes.txt  physics_notes.txt
@Ruslan8482 ➜ .../home/student/Documents/School (main) $ cp homework.txt math_notes.txt physics_notes.txt ../../Backup/
@Ruslan8482 ➜ .../home/student/Documents/School (main) $ 4.2
bash: 4.2: command not found
@Ruslan8482 ➜ .../home/student/Documents/School (main) $ cd ..
@Ruslan8482 ➜ .../unix_practice/home/student/Documents (main) $ cp -r Documents/Work Documents/Work_Backup
cp: cannot stat 'Documents/Work': No such file or directory
@Ruslan8482 ➜ .../unix_practice/home/student/Documents (main) $ cd ..
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cp -r Documents/Work Documents/Work_Backup
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cp Projects/Website Projects/Website_Old
cp: -r not specified; omitting directory 'Projects/Website'
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cp -r Projects/Website Projects/Website_Old
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 4.3
bash: 4.3: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd Desktop/
@Ruslan8482 ➜ .../unix_practice/home/student/Desktop (main) $ mv todo.txt my_todo.txt
@Ruslan8482 ➜ .../unix_practice/home/student/Desktop (main) $ ls
important.txt  my_todo.txt  quick_notes.txt  shopping_list.txt
@Ruslan8482 ➜ .../unix_practice/home/student/Desktop (main) $ mv quick_notes.txt ../Documents/Personal/
@Ruslan8482 ➜ .../unix_practice/home/student/Desktop (main) $ ls
important.txt  my_todo.txt  shopping_list.txt
@Ruslan8482 ➜ .../unix_practice/home/student/Desktop (main) $ cd ..
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mv important_file.txt very_important.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mv archive_me.txt Backup/
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 5.1
bash: 5.1: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ find . -name "*.txt"
./old_file_2021.txt
./very_important.txt
./Desktop/important.txt
./Desktop/shopping_list.txt
./Desktop/my_todo.txt
./old_file_2020.txt
./Documents/School/homework.txt
./Documents/School/math_notes.txt
./Documents/School/physics_notes.txt
./Documents/Personal/notes.txt
./Documents/Personal/quick_notes.txt
./Documents/Personal/shopping_list.txt
./Documents/Personal/notes_backup.txt
./Documents/Work/report_jan.txt
./Documents/Work/report_feb.txt
./Documents/Work/presentation.txt
./Documents/Work_Backup/report_jan.txt
./Documents/Work_Backup/report_feb.txt
./Documents/Work_Backup/presentation.txt
./file3.txt
./Projects/Python/requirements.txt
./Backup/homework.txt
./Backup/archive_me.txt
./Backup/math_notes.txt
./Backup/physics_notes.txt
./task4.txt
./task3.txt
./Learning/Git/branches.txt
./Learning/Git/intro.txt
./Learning/Linux/basics.txt
./Learning/Linux/advanced.txt
./Learning/Programming/python_basics.txt
./Learning/Programming/js_basics.txt
./Downloads/file2.txt
./Downloads/file1.txt
./TestFiles/file2.txt
./TestFiles/file1.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ find . -name "notes.txt"
./Documents/Personal/notes.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ find . -type d -name "Work"
./Documents/Work
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ find . -name "*.mp3"
./Music/Pop/pop2.mp3
./Music/Pop/pop1.mp3
./Music/Classical/mozart.mp3
./Music/Rock/song1.mp3
./Music/Rock/song2.mp3
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 5.2
bash: 5.2: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ grep "Отчет" Documents/Work/report_jan.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ grep "Отчёт" Documents/Work/report_jan.txt
Отчёт за январь 2024
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ grep "список" Documents/Personal/*.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ grep -i "отчёт" Documents/Work/*.txt
Documents/Work/report_feb.txt:Отчёт за февраль 2024
Documents/Work/report_jan.txt:Отчёт за январь 2024
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ grep -r "фото" Pictures/
Pictures/Family/family_2023.jpg:Семейное фото 1
Pictures/Family/family_2024.jpg:Семейное фото 2
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ grep -r "Конспект" Documents/
Documents/School/math_notes.txt:Конспект по математике
Documents/School/physics_notes.txt:Конспект по физике
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 6.1
bash: 6.1: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mkdir Organized
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd Orginized
bash: cd: Orginized: No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cd Organized
@Ruslan8482 ➜ .../unix_practice/home/student/Organized (main) $ mkdir TextFiles Images Code
@Ruslan8482 ➜ .../unix_practice/home/student/Organized (main) $ cd ../TestFiles/
@Ruslan8482 ➜ .../unix_practice/home/student/TestFiles (main) $ cp file1.txt file2.txt ../Organized/TextFiles/
@Ruslan8482 ➜ .../unix_practice/home/student/TestFiles (main) $ cd ../Pictures/Vacation/
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ cp beach.jpg mountains.jpg ../Organized/Images/
cp: target '../Organized/Images/': No such file or directory
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ cp beach.jpg mountains.jpg ../Organized/images
cp: target '../Organized/images': No such file or directory
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ cp beach.jpg mountains.jpg ../Organized/Images
cp: target '../Organized/Images': No such file or directory
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ cp beach.jpg mountains.jpg ../../Organized/Images/
@Ruslan8482 ➜ .../home/student/Pictures/Vacation (main) $ cd ../../Projects/Python/scripts/
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ ls
main.py  utils.py
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ cp main.py utils.py ../../../Organized/Code/
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ 6.2
bash: 6.2: command not found
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ find . -name "*old*"
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ find . -name "*old*"
@Ruslan8482 ➜ .../student/Projects/Python/scripts (main) $ cd ../../..
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ find . -name "*old*"
./old_file_2021.txt
./old_file_2020.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ rm task3.txt task4.txt 
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mv old_file_2021.txt old_file_2022.txt Backup/ 
mv: cannot stat 'old_file_2022.txt': No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mv old_file_2021.txt old_file_2020.txt Backup/ 
mv: cannot stat 'old_file_2021.txt': No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ mv old_file_2020.txt old_file_2021.txt Backup/ 
mv: cannot stat 'old_file_2020.txt': No such file or directory
mv: cannot stat 'old_file_2021.txt': No such file or directory
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 6.3
bash: 6.3: command not found
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ touch repor.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls -l Projects/ > report.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ ls -l Projects/ > report.txt
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ cat report.txt
total 16
drwxrwxrwx+ 2 codespace codespace 4096 Nov 21 15:10 Learning
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 Python
drwxrwxrwx+ 5 codespace codespace 4096 Nov 21 15:10 Website
drwxr-xr-x+ 5 codespace codespace 4096 Nov 21 15:34 Website_Old
@Ruslan8482 ➜ .../-8482/unix_practice/home/student (main) $ 