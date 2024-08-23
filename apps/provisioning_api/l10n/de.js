OC.L10N.register(
    "provisioning_api",
    {
    "Logged in account must be an administrator or have authorization to edit this setting." : "Das angemeldete Konto muss ein Administrationskonto sein oder die Berechtigung haben, diese Einstellung zu bearbeiten.",
    "Could not create non-existing user ID" : "Nicht vorhandene Benutzer-ID konnte nicht erstellen werden",
    "User already exists" : "Benutzer existiert bereits",
    "Group %1$s does not exist" : "Gruppe %1$s existiert nicht",
    "Insufficient privileges for group %1$s" : "Unzureichende Berechtigungen für Gruppe %1$s",
    "No group specified (required for sub-admins)" : "Keine Gruppe angegeben (erforderlich für Unter-Administration)",
    "Sub-admin group does not exist" : "Die Unter-Administrations-Gruppe existiert nicht",
    "Cannot create sub-admins for admin group" : "Kann keine Unter-Administration für die Administrations-Gruppe erstellen",
    "No permissions to promote sub-admins" : "Keine Berechtigungen, um Unter-Administration zu ernennen",
    "Invalid password value" : "Ungültiger Passwort-Wert",
    "To send a password link to the user an email address is required." : "Um einen Passwort-Link an einen Benutzer zu versenden wird eine E-Mail-Adresse benötigt.",
    "Required email address was not provided" : "Erforderliche E-Mail-Adresse wurde nicht angegeben",
    "Invalid quota value: %1$s" : "Ungültiger Wert für Speicherkontigent: %1$s",
    "Invalid quota value. %1$s is exceeding the maximum quota" : "Ungültiger Wert für Speicherkontigent. %1$s überschreitet das maximale Kontigent",
    "Unlimited quota is forbidden on this instance" : "Unbegrenztes Speicherkontigent ist auf dieser Instanz unzulässig",
    "Setting the password is not supported by the users backend" : "Das Passwort kann nicht über das Benutzerbackend festgelegt werden",
    "Invalid language" : "Ungültige Sprache",
    "Invalid locale" : "Ungültige Lokalisierung",
    "Invalid first day of week" : "Ungültiger erster Tag der Woche",
    "Cannot remove yourself from the admin group" : "Du kannst dich nicht selbst aus der Administrationsgruppe entfernen.",
    "Cannot remove yourself from this group as you are a sub-admin" : "Du kannst dich nicht selbst aus dieser Gruppe entfernen, da du zur Unteradministration gehörst.",
    "Not viable to remove user from the last group you are sub-admin of" : "Das Konto aus der letzten Gruppe zu entfernen, in der du zur Unteradministration gehörst ist nicht möglich.",
    "User does not exist" : "Konto existiert nicht",
    "Group does not exist" : "Gruppe existiert nicht",
    "User is not a sub-admin of this group" : "Konto ist kein Unter-Administrator dieser Gruppe",
    "Email address not available" : "E-Mail-Adresse nicht verfügbar",
    "Sending email failed" : "Senden der E-Mail ist fehlgeschlagen",
    "Email confirmation" : "E-Mail-Bestätigung",
    "To enable the email address %s please click the button below." : "Um die E-Mail-Adresse %s zu bestätigen, klicke bitte auf die untenstehende Schaltfläche.",
    "Confirm" : "Bestätigen",
    "Email was already removed from account and cannot be confirmed anymore." : "Diese E-Mail-Adresse wurde bereits aus dem Konto entfernt und kann nicht mehr bestätigt werden.",
    "Could not verify mail because the token is expired." : "Die E-Mail konnte nicht verifiziert werden, da die Frist des Tokens abgelaufen ist.",
    "Could not verify mail because the token is invalid." : "Die E-Mail konnte nicht verifiziert werden, da der Token ungültig ist.",
    "An unexpected error occurred. Please contact your admin." : "Es ist ein unerwarteter Fehler aufgetreten, bitte kontaktiere deinen Administrator.",
    "Email confirmation successful" : "Die E-Mail Bestätigung war erfolgreich.",
    "Provisioning API" : "Bereitstellungs-API",
    "This application enables a set of APIs that external systems can use to manage accounts, groups and apps." : "Diese Applikation stellt einen Satz von APIs für externe Systeme zur Verfügung um Konten, Gruppen und Apps zu verwalten.",
    "This application enables a set of APIs that external systems can use to create, edit, delete and query account\n\t\tattributes, query, set and remove groups, set quota and query total storage used in Nextcloud. Group admin accounts\n\t\tcan also query Nextcloud and perform the same functions as an admin for groups they manage. The API also enables\n\t\tan admin to query for active Nextcloud applications, application info, and to enable or disable an app remotely.\n\t\tOnce the app is enabled, HTTP requests can be used via a Basic Auth header to perform any of the functions\n\t\tlisted above. More information is available in the Provisioning API documentation, including example calls\n\t\tand server responses." : "Diese Anwendung aktiviert eine Reihe von APIs, mit denen externe Systeme Konten erstellen, bearbeiten, löschen und abfragen können\n\t\tAttribute, Gruppen abfragen, festlegen und entfernen, Kontingent festlegen und Gesamtspeicher abfragen, der in Nextcloud verwendet wird. Gruppenadministrationskonto\n\t\tDu kannst auch Nextcloud abfragen und dieselben Funktionen wie ein Administrator für von dir verwaltete Gruppen ausführen. Die API ermöglicht auch\n\t\tEine Administration, die nach aktiven Nextcloud-Anwendungen und Anwendungsinformationen fragt und eine App entfernt aktiviert oder deaktiviert.\n\t\tSobald die App aktiviert ist, können HTTP-Anforderungen über einen Basic Auth-Header verwendet werden, um eine der Funktionen auszuführen\n\t\toben aufgelistet. Weitere Informationen findest du in der Bereitstellung-API Dokumentation, einschließlich Beispielaufrufen\n\t\tund Serverantworten.",
    "Logged in user must be an administrator or have authorization to edit this setting." : "Der angemeldete Benutzer muss ein Administrator sein oder die Berechtigung haben, diese Einstellung zu bearbeiten.",
    "This application enables a set of APIs that external systems can use to manage users, groups and apps." : "Diese Anwendung stellt eine API bereit, um von anderen Systemen aus Benutzer, Gruppen und Apps zu verwalten.",
    "This application enables a set of APIs that external systems can use to create, edit, delete and query user\n\t\tattributes, query, set and remove groups, set quota and query total storage used in Nextcloud. Group admin users\n\t\tcan also query Nextcloud and perform the same functions as an admin for groups they manage. The API also enables\n\t\tan admin to query for active Nextcloud applications, application info, and to enable or disable an app remotely.\n\t\tOnce the app is enabled, HTTP requests can be used via a Basic Auth header to perform any of the functions\n\t\tlisted above. More information is available in the Provisioning API documentation, including example calls\n\t\tand server responses." : "Diese Anwendung aktiviert eine Reihe von APIs, mit denen externe Systeme Benutzer erstellen, bearbeiten, löschen und abfragen können\n\t\tAttribute, Gruppen abfragen, festlegen und entfernen, Kontingent festlegen und Gesamtspeicher abfragen, der in Nextcloud verwendet wird. Gruppenadministratorbenutzer\n\t\tSie können auch Nextcloud abfragen und dieselben Funktionen wie ein Administrator für von ihnen verwaltete Gruppen ausführen. Die API ermöglicht auch\n\t\tEin Administrator, der nach aktiven Nextcloud-Anwendungen und Anwendungsinformationen fragt und eine App entfernt aktiviert oder deaktiviert.\n\t\tSobald die App aktiviert ist, können HTTP-Anforderungen über einen Basic Auth-Header verwendet werden, um eine der Funktionen auszuführen\n\t\toben aufgelistet. Weitere Informationen findest du in der Bereitstellung-API Dokumentation, einschließlich Beispielaufrufen\n\t\tund Serverantworten."
},
"nplurals=2; plural=(n != 1);");
