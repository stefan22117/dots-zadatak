# dots-zadatak

Pokrenuti index.js fajl komandom **node/nodemon index.js**

Aplikacija nas pita da li želimo da napišemo naš string ili da ga pročitamo iz nekog fajla

```
Write string (y) or read file (n) ?
```
**Y/y + Enter** nam čita sve što upišemo dok ne završimo upis pritiskom komande Ctrl + D (ako se ispiše ^D, pritisnuti Enter) 
prikazuje u konzoli promenjeni string i upisuje ga u output.txt fajl.

**N/n** (ili bilo šta drugo) **+ Enter** komanda preusmerava kod tako da nas pita iz kog fajla želimo da pročitamo string:
```
Enter file name (only txt files):
```
Kada upišemo ime fajla i pritisnemo **Enter**, prikazuje se u konzoli promenjeni string iz izabranog fajla i upisuje ga u output.txt fajl.
