import { OrgControl } from "./_components/org-control";

const organizacionIdLayout = ({
    children
}:{
    children: React.ReactNode;
}) =>{
    return(
        <>
            <OrgControl />
            {children}
        </>
    )
}

export default organizacionIdLayout;