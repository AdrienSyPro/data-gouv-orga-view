import type Member from "./member"
import type Metric from "./metric"

export default interface Organization {
    acronym: string | null,
    badges: string[],
    business_number_id: string,
    created_at: string|Date,
    deleted: string | null,
    description: string,
    last_modified: string|Date,
    logo: string,
    logo_thumbnail: string,
    members: Member[],
    metrics: Metric,
    name: string,
    page: string,
}
