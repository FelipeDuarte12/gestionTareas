import { OrganizationList } from "@clerk/nextjs";

export default function crearOrganizacionPage(){
    return(
        <OrganizationList 
            hidePersonal
            afterSelectOrganizationUrl="/organizacion/:id"
            afterCreateOrganizationUrl="/organizacion/:id"
        />
    )
}
