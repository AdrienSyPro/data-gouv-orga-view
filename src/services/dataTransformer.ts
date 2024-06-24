import type Organization from "@/models/organization";

export function transformOrganization(organizationData: Organization): Organization {
    return {
        ...organizationData,
        created_at: new Date(organizationData.created_at),
    };
}