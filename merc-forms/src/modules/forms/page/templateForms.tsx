import { useParams } from "react-router-dom";
import { ContactForm } from "./templates/contactForm";
import { EventRegistrationForm } from "./templates/eventRegistrationForm";
import { PartyInviteForm } from "./templates/partyInviteForm";

export function TemplateForms() {
  // Access the "templateName" parameter from the route
  const { templateName } = useParams();

  // Depending on the "templateName" value, you can render different template forms
  let templateContent = null;

  if (templateName === "event-registration") {
    templateContent = <EventRegistrationForm />;
  } else if (templateName === "party-invitation") {
    templateContent = <PartyInviteForm />;
  } else if (templateName === "contact-form") {
    templateContent = <ContactForm />;
  }

  return <>{templateContent}</>;
}
