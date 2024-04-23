OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Klarte ikke å nullstille tilknytningene.",
    "Failed to delete the server configuration" : "Klarte ikke å slette server-konfigurasjonen.",
    "Invalid configuration: Anonymous binding is not allowed." : "Oppsettet er ugyldig: Anonym binding er ikke tillatt.",
    "Valid configuration, connection established!" : "Gyldig oppsett, tilkoblet.",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Oppsettet er i orden, men binding mislyktes. Sjekk server-oppsettet og påloggingsinformasjonen.",
    "Invalid configuration. Please have a look at the logs for further details." : "Oppsettet er ikke gyldig. Sjekk loggene for flere detaljer.",
    "No action specified" : "Ingen handling spesifisert",
    "No configuration specified" : "Ingen oppsett spesifisert",
    "No data specified" : "Ingen data spesifisert",
    "Invalid data specified" : "Ugyldige data er spesifisert",
    " Could not set configuration %s" : "Klarte ikke å utføre oppsett %s",
    "Action does not exist" : "Handlingen finnes ikke",
    "Renewing …" : "Fornyer…",
    "Very weak password" : "Veldig svakt passord",
    "Weak password" : "Svakt passord",
    "So-so password" : "Nesten godt passord",
    "Good password" : "Godt passord",
    "Strong password" : "Sterkt passord",
    "The Base DN appears to be wrong" : "Basis DN er feil",
    "Testing configuration…" : "Tester oppsettet…",
    "Configuration incorrect" : "Oppsettet er galt",
    "Configuration incomplete" : "Ufullstendig oppsett",
    "Configuration OK" : "Oppsett OK",
    "Select groups" : "Velg grupper",
    "Select object classes" : "Velg objekt klasser",
    "Please check the credentials, they seem to be wrong." : "Sjekk påloggingsdetaljene; de ser ut til å være feil.",
    "Please specify the port, it could not be auto-detected." : "Spesifiser porten. Den kunne ikke påvises automatisk.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base-DN kunne ikke påvises automatisk. Se igjennom pålogginsdetaljer, vertsnavn og portnummer.",
    "Could not detect Base DN, please enter it manually." : "Klarte ikke å påvise base DN. Det må skrives inn manuelt.",
    "{nthServer}. Server" : "{nthServer}. Server",
    "No object found in the given Base DN. Please revise." : "Intet objekt funnet i angitt base DN. Revider oppsettet.",
    "More than 1,000 directory entries available." : "Mer enn 1.000 oppføringer er tilgjengelig i katalog.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} oppføring tilgjengelig i den angitte Base DN","{objectsFound} oppføringer tilgjengelig i den angitte Base DN"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Det oppsto en feil. Sjekk base-DN, tilkoblingsoppsett og påloggingsdetaljer.",
    "Do you really want to delete the current Server Configuration?" : "Er du sikker på at du vil slette den aktiver serverkonfigurasjon?",
    "Confirm Deletion" : "Bekreft sletting",
    "Mappings cleared successfully!" : "Tilknytningene ble fjernet!",
    "Error while clearing the mappings." : "Feil ved fjerning av tilknytninger.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Anonym binding er ikke tillatt. Oppgi en bruker DN og passord.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Feil ved LDAP operasjon. Anonym binding er kanskje ikke tillatt.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Lagring fellet. Forsikre deg om at databasen er i gang. Last på nytt før du fortsetter.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Endring av modus vil aktivere automatiske LDAP-spørringer. Avhengig av din LDAP størrelse kan de ta litt tid. Vil du likevel endre modus?",
    "Mode switch" : "Endring av modus",
    "Select attributes" : "Velg attributter",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Bruker ikke funnet. Sjekk påloggingsattributtene og brukernavnet. Virksomt filter (kopier og lim inn for validering på kommandolinjen): <br/>",
    "User found and settings verified." : "Bruker funnet og innstillinger bekreftet.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Overvei å snevre inn søket ditt, siden det spenner over mange brukere, bare den første derav vil kunne logge inn.",
    "An unspecified error occurred. Please check log and settings." : "En uspesifisert feil oppsto. Sjekk loggen og innstillingene.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Søkefilteret er ugyldig, antakelig pga. syntaksproblemer som ulikt antall start- og sluttparenteser. Sjekk det.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "Det oppsto en tilkoblingsfeil til LDAP/AD. Vennligst sjekk vert, port og legitimasjon.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "Plassholderen \"%uid\" mangler. Det vil bli erstattet med påloggingsnavnet når det spørres etter LDAP/AD.",
    "Please provide a login name to test against" : "Oppgi et påloggingsnavn å teste mot",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "Gruppeboksen ble deaktivert fordi LDAP/AD-serveren ikke støtter memberOf.",
    "Password change rejected. Hint: " : "Passordendring avslått. Hint:",
    "Please login with the new password" : "Logg inn med det nye passordet",
    "LDAP User backend" : "LDAP-brukerbackend",
    "Your password will expire tomorrow." : "Passordet ditt utløper i morgen.",
    "Your password will expire today." : "Passordet ditt utløper i dag.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Passordet ditt utløper om %n dag.","Passordet ditt utløper om %n dager."],
    "LDAP/AD integration" : "LDAP/AD-integrasjon",
    "LDAP Connection" : "LDAP-forbindelse",
    "_Binding failed for this LDAP configuration: %s_::_Binding failed for these LDAP configurations: %s_" : ["Binding mislyktes for denne LDAP-konfigurasjonen: %s","Binding mislyktes for disse LDAP-konfigurasjonene: %s"],
    "Invalid LDAP UUIDs" : "Ugyldige LDAP UUID-er",
    "None found" : "Ingen funnet",
    "Invalid UUIDs of LDAP accounts or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "Det er funnet ugyldige UUID-er for LDAP-brukere eller -grupper. Gå gjennom innstillingene for «Overstyr UUID-deteksjon» i Ekspert-delen av LDAP-konfigurasjonen, og bruk «occ ldap:update-uuid» for å oppdatere dem.",
    "_%n group found_::_%n groups found_" : ["%n gruppe funnet","%n grupper funnet"],
    "> 1000 groups found" : "> 1000 grupper funnet",
    "> 1000 users found" : "> 1000 brukere funnet",
    "_%n user found_::_%n users found_" : ["%n bruker funnet","%n brukere funnet"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Kunne ikke påvise attributt for brukers visningsnavn. Du må selv spesifisere det i avanserte LDAP-innstillinger.",
    "Could not find the desired feature" : "Fant ikke den ønskede funksjonaliteten",
    "Invalid Host" : "Ugyldig server",
    "LDAP user and group backend" : "LDAP bruker- og gruppe tjeneste",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Denne applikasjonen lar administratorer koble Nextcloud til en LDAP-basert brukerkatalog.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Denne applikasjonen lar administratorer koble Nextcloud til en LDAP-basert brukerkatalog for autentisering og klargjøring av brukere, grupper og brukerattributter. Administratorer kan konfigurere dette programmet for å koble til en eller flere LDAP-kataloger eller Active Directory via et LDAP-grensesnitt. Attributter som brukerkvote, e-post, avatarbilder, gruppemedlemskap og mer kan trekkes inn i Nextcloud fra en katalog med riktige spørsmål og filtre.\n\nEn bruker logger seg på Nextcloud med LDAP- eller AD-legitimasjon, og får tilgang basert på en autentiseringsforespørsel håndtert av LDAP- eller AD-serveren. Nextcloud lagrer ikke LDAP- eller AD-passord, men disse legitimasjonene brukes til å autentisere en bruker, og deretter bruker Nextcloud en økt for bruker-ID-en. Mer informasjon er tilgjengelig i LDAP User and Group Backend-dokumentasjonen.",
    "Test Configuration" : "Test oppsettet",
    "Help" : "Hjelp",
    "Groups meeting these criteria are available in %s:" : "Grupper som tilfredsstiller disse kriteriene er tilgjengelige i %s:",
    "Only these object classes:" : "Kun disse objektklassene:",
    "Only from these groups:" : "Kun fra disse gruppene:",
    "Search groups" : "Søk i grupper",
    "Available groups" : "Tilgjengelige grupper",
    "Selected groups" : "Valgte grupper",
    "Edit LDAP Query" : "Rediger LDAP-spørring",
    "LDAP Filter:" : "LDAP-filter:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Filteret spesifiserer hvilke LDAP-grupper som skal ha tilgang til %s-instansen.",
    "Verify settings and count the groups" : "Bekreft innstillingene og tell gruppene",
    "When logging in, %s will find the user based on the following attributes:" : "Ved pålogging vil %s finne brukeren basert på følgende attributter:",
    "LDAP/AD Username:" : "LDAP/AD-brukernavn:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Tillater pålogging mot LDAP/AD-brukernavnet, som enten er \"uid\" eller \"sAMAccountName\" og vil bli oppdaget.",
    "LDAP/AD Email Address:" : "LDAP/AD e-postadresse:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Tillater innlogging mot en e-postattributt. \"mail\" og \"mailPrimaryAddress\" tillates.",
    "Other Attributes:" : "Andre attributter:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Definerer et filter å legge til, når innlogging forsøkes. \"%%uid\" erstatter brukernavnet i innloggingshandlingen. Eksempel: \"uid=%%uid\"",
    "Test Loginname" : "Test påloggingsnavn",
    "Attempts to receive a DN for the given loginname and the current login filter" : "Forsøk på å motta en DN for det gitte påloggingsnavnet og det gjeldende påloggingsfilteret",
    "Verify settings" : "Sjekk innstillinger",
    "%s. Server:" : "%s. server:",
    "Add a new configuration" : "Legger til nytt oppsett",
    "Copy current configuration into new directory binding" : "Kopier gjeldende konfigurasjon til ny katalogbinding",
    "Delete the current configuration" : "Slett gjeldende konfigurasjon",
    "Host" : "Server",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Du kan unnlate protokollen, bortsett fra hvis du krever SSL. Om så er tilfelle, start med ldaps://",
    "Port" : "Port",
    "Detect Port" : "Påvis port",
    "User DN" : "Bruker DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN for klientbrukeren som binding skal gjøres med, f.eks. uid=agent,dc=example,dc=com. For anonym tilgang, la DN og passord stå tomme.",
    "Password" : "Passord",
    "For anonymous access, leave DN and Password empty." : "For anonym tilgang, la DN og passord feltet stå tomt.",
    "Save Credentials" : "Lagre påloggingsdetaljer",
    "One Base DN per line" : "En base DN pr. linje",
    "You can specify Base DN for users and groups in the Advanced tab" : "Du kan spesifisere base DN for brukere og grupper under 'Avansert'-fanen",
    "Detect Base DN" : "Påvis base DN",
    "Test Base DN" : "Test base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Unngår automatiske LDAP forespørsler. Bedre for store oppsett men krever litt LDAP kunnskap.",
    "Manually enter LDAP filters (recommended for large directories)" : "Legg inn LDAP filtre manuelt (anbefalt for store kataloger)",
    "Listing and searching for users is constrained by these criteria:" : "Opplisting av og søking etter brukere begrenses av disse kriteriene:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "De mest vanlige objektklassene for brukere er organizationalPerson, person, user og inetOrgPerson. Kontakt katalogadministratoren hvis du er usikker på hvilken objektklasse du skal velge.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Filteret spesifiserer hvilke LDAP-brukere som skal ha tilgang til %s instansen.",
    "Verify settings and count users" : "Sjekk innstillinger og tell brukere",
    "Saving" : "Lagrer",
    "Back" : "Tilbake",
    "Continue" : "Fortsett",
    "Please renew your password." : "Forny passordet ditt.",
    "An internal error occurred." : "En intern feil oppsto",
    "Please try again or contact your administrator." : "Prøv igjen eller kontakt en administrator.",
    "Current password" : "Nåværende passord",
    "New password" : "Nytt passord",
    "Renew password" : "Forny passord",
    "Wrong password." : "Feil passord.",
    "Cancel" : "Avbryt",
    "Server" : "Server",
    "Users" : "Brukere",
    "Login Attributes" : "Påloggingsattributter",
    "Groups" : "Grupper",
    "Expert" : "Ekspert",
    "Advanced" : "Avansert",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Advarsel:</b> PHP LDAP modulen er ikke installert og serveren vil ikke virke. Be systemadministratoren installere den.",
    "Connection Settings" : "Innstillinger for tilkobling",
    "Configuration Active" : "Oppsett aktivt",
    "When unchecked, this configuration will be skipped." : "Overser oppsettet når ikke avhuket.",
    "Backup (Replica) Host" : "Sikkerhetskopierings (Replica-) vert",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Oppgi en valgfri reserveserver. Den må være en replika av hovedserveren for LDAP/AD.",
    "Backup (Replica) Port" : "Reserve (replikert) port",
    "Disable Main Server" : "Skru av hovedserveren",
    "Only connect to the replica server." : "Koble til bare replikert serveren.",
    "Turn off SSL certificate validation." : "Slå av SSL sertifikat validering",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Ikke anbefalt, bruk kun for testing! Hvis tilkobling bare virker med dette valget, importer LDAP serverens SSL sertifikat i %s serveren din.",
    "Cache Time-To-Live" : "Levetid i hurtiglager",
    "in seconds. A change empties the cache." : "i sekunder. Endring tømmer hurtiglageret.",
    "Directory Settings" : "Innstillinger for katalog",
    "User Display Name Field" : "Felt med brukerens visningsnavn",
    "The LDAP attribute to use to generate the user's display name." : "LDAP attributten som skal brukes til å generere brukerens visningsnavn.",
    "2nd User Display Name Field" : "2. felt med brukerens visningsnavn",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Valgfritt. En LDAP attributt som skal legges til visningsnavnet i parentes. Resulterer i f.eks. »Gulbrand Gråstein (gulbrand.grastein@andeby.org)«.",
    "Base User Tree" : "Base for bruker-tre",
    "One User Base DN per line" : "En base DN for brukere pr. linje",
    "User Search Attributes" : "Attributter for brukersøk",
    "Optional; one attribute per line" : "Valgfritt, en attributt per linje",
    "Disable users missing from LDAP" : "Deaktiver brukere som mangler fra LDAP",
    "When switched on, users imported from LDAP which are then missing will be disabled" : "Når den er slått på, deaktiveres brukere importert fra LDAP som da mangler",
    "Group Display Name Field" : "Felt med gruppens visningsnavn",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP attributten som skal brukes til å generere gruppens visningsnavn.",
    "Base Group Tree" : "Base for gruppetre",
    "One Group Base DN per line" : "En base DN for grupper per linje",
    "Group Search Attributes" : "Attributter for gruppesøk",
    "Group-Member association" : "gruppe-medlem tilknytning",
    "Dynamic Group Member URL" : "URL for dynamisk gruppemedlem",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "LDAP attributten som, på gruppe objekter, inneholder en LDAP søke URL som bestemmer hvilke objekter som hører til gruppen. (En tom innstilling deaktiverer funksjonaliteten for dynamisk gruppemedlemskap.)",
    "Nested Groups" : "Underlagte grupper",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Grupper som inneholder grupper er tillatt når denne er slått på. (Virker bare hvis gruppenes attributt inneholder DN.)",
    "Paging chunksize" : "Sidestørrelse",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Sidestørrelsen brukes for sidevise LDAP søk som kan returnere store resultater, som gjennomløping av brukere eller grupper. (Sett til 0 for å deaktivere sidevis LDAP spørring i disse situasjonene.)",
    "Enable LDAP password changes per user" : "Skru på LDAP passordsendringer per bruker",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Tillat LDAP-brukere å endre passordet sitt og tillat superadministratorer og gruppeadministratorer å endre passordet til sine LDAP-brukere. Virker bare når tilgangskontrollpraksis er satt opp i henhold på LDAP-serveren. Siden passord sendes i klartekst til LDAP-serveren, må transportkryptering brukes og passord-hashing må settes opp på LDAP-serveren.",
    "(New password is sent as plain text to LDAP)" : "(Nytt passord blir sendt i klartekst til LDAP)",
    "Default password policy DN" : "Standard passordregler DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "DN tilhørende forvalgt passordspraksis som brukes for behandling av passordutløp. Fungerer bare når LDAP-passordendring er påskrudd på brukernivå og støttes bare av OpenLDAP. La stå tom for å skru av behandling av passordutløp.",
    "Special Attributes" : "Spesielle attributter",
    "Quota Field" : "Felt med lagringskvote",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "La stå tom for brukerens forvalgte kvote. Ellers, spesifiser en LDAP/AD attributt.",
    "Quota Default" : "Standard lagringskvote",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Overskriv forvalgt kvote for LDAP brukere som ikke har kvote satt i kvotefeltet.",
    "Email Field" : "Felt med e-post adresse",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Sett brukerens e-post fra deres LDAP attributt. La stå tom for forvalgt oppførsel.",
    "User Home Folder Naming Rule" : "Navneregel for brukers hjemmemappe",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "La det være tomt for brukernavnet (standard). Ellers spesifiserer du et LDAP/AD-attributt.",
    "\"$home\" Placeholder Field" : "\"$home\" Plassholderfelt",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$homei en ekstern lagringskonfigurasjon vil bli erstattet med verdien for det angitte attributtet",
    "User Profile Attributes" : "Attributter for brukerprofil",
    "Phone Field" : "Telefonfelt",
    "User profile Phone will be set from the specified attribute" : "Brukerprofil Telefon vil bli satt fra det angitte attributtet",
    "Website Field" : "Nettstedfelt",
    "User profile Website will be set from the specified attribute" : "Brukerprofil Nettsted vil bli satt fra det angitte attributtet",
    "Address Field" : "Adressefelt",
    "User profile Address will be set from the specified attribute" : "Brukerprofil Adresse vil bli satt fra det angitte attributtet",
    "Twitter Field" : "Twitterfelt",
    "User profile Twitter will be set from the specified attribute" : "Brukerprofil Twitter vil bli satt fra det angitte attributtet",
    "Fediverse Field" : "Fediverse felt",
    "User profile Fediverse will be set from the specified attribute" : "Brukerprofil Fediverse vil bli satt fra det angitte attributtet",
    "Organisation Field" : "Organisasjonsfelt",
    "User profile Organisation will be set from the specified attribute" : "Brukerprofil Organisasjon vil bli satt fra det angitte attributtet",
    "Role Field" : "Rollefelt",
    "User profile Role will be set from the specified attribute" : "Brukerprofil Rolle vil bli satt fra det angitte attributtet",
    "Headline Field" : "Overskriftsfelt",
    "User profile Headline will be set from the specified attribute" : "Brukerprofil Overskrift vil bli satt fra det angitte attributtet",
    "Biography Field" : "Biografifelt",
    "User profile Biography will be set from the specified attribute" : "Brukerprofil Biografi vil bli satt fra det angitte attributtet",
    "Internal Username" : "Internt brukernavn",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "Som standard vil det interne brukernavnet bli opprettet fra UUID-attributten. Den sørger for at brukernavnet er unikt og at tegn ikke trenger å konverteres. Det interne brukernavnet har en begrensning at kun disse tegnene er tillatt: [a-zA-Z0-9_.@-]. Andre tegn erstattes med deres ASCII-ekvivalent eller bare utelatt. Ved kollisjoner vil et tall legges til/økes. Det interne brukernavnet brukes til å identifisere en bruker internt. Det er også standardnavnet for brukerens hjemmeområde. Det er også en del av eksterne URL-er, for eksempel for alle DAV-tjenester. Med denne innstillingen kan standardoppførselen overstyres. Endringer vil bare ha effekt på nylig kartlagte (tillagte) LDAP-brukere. La det stå tomt for standard oppførsel.",
    "Internal Username Attribute:" : "Attributt for internt brukernavn:",
    "Override UUID detection" : "Overstyr UUID detektering",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Som forvalg blir UUID attributten påvist automatisk. UUID attributten brukes til å identifisere LDAP brukere og grupper unikt. Det interne brukernavnet vil også bli laget basert på UUID, hvis ikke annet er spesifisert ovenfor. Du kan overstyre innstillingen og oppgi den attributten du ønsker. Du må forsikre deg om at din valgte attributt kan hentes ut både for brukere og for grupper og at den er unik. La stå tomt for forvalgt ppførsel. Endringer vil kun påvirke nylig tilknyttede (opprettede) LDAP brukere og grupper.",
    "UUID Attribute for Users:" : "UUID attributt for brukere:",
    "UUID Attribute for Groups:" : "UUID-attributt for grupper:",
    "Username-LDAP User Mapping" : "Tilknytning av brukernavn til LDAP bruker",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Brukernavn brukes til å lagre og tildele metadata. For å identifisere og gjenkjenne brukere nøyaktig, vil hver LDAP-bruker ha et internt brukernavn. Dette krever en kartlegging fra brukernavn til LDAP-bruker. Det opprettede brukernavnet tilordnes UUID for LDAP-brukeren. I tillegg er DN også hurtigbufret for å redusere LDAP-interaksjon, men den brukes ikke til identifikasjon. Hvis DN endres, vil endringene bli funnet. Det interne brukernavnet brukes overalt. Å rydde kartleggingen vil ha rester overalt. Å rydde tilordningene er ikke konfigurasjonsfølsom, det påvirker alle LDAP-konfigurasjoner! Tøm aldri kartleggingen i et produksjonsmiljø, bare i et test- eller eksperimentelt stadium.",
    "Clear Username-LDAP User Mapping" : "Nullstill tilknytning av brukernavn til LDAP bruker",
    "Clear Groupname-LDAP Group Mapping" : "Nullstill tilknytning av gruppenavn til LDAP gruppe",
    "Invalid UUIDs of LDAP users or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "Det er funnet ugyldige UUID-er for LDAP-brukere eller -grupper. Gå gjennom innstillingene for «Overstyr UUID-deteksjon» i Ekspert-delen av LDAP-konfigurasjonen, og bruk «occ ldap:update-uuid» for å oppdatere dem."
},
"nplurals=2; plural=(n != 1);");
