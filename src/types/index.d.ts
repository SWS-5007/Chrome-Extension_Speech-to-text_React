// import { handleMkiconfData } from '@/modules/mkiconf'
export interface MkiconfAdministeredNetwork {
  id: string
  n: string
  t: string
  eid: string
  locale_id: string
  config_template_ng_id: null
  network_type: string
  network_tags: null
  time_zone: string
  node_group_mtime: number
  node_group_ctime: number
  can_read: boolean
  can_write: boolean
  has_wireless: boolean
  has_wired: true
  has_vm_concentrator: boolean
  has_pcc: boolean
  has_switch: true
  has_phone: boolean
  is_virtual: boolean
  is_config_template: boolean
  has_sensor: boolean
  has_cellular_gateway: boolean
  is_template_child: boolean
  name: string
  tags: string
}

export interface MkiconfAdministeredOrganization {
  id: string
  eid: string
  uid: string
  org_admin_type: string
  name: string
  num_networks: number
  num_visible_networks: number
  shard_id: number
  licensed_product_edition_name: string // We could restrict this to a set of fixed values:  enterprise
  license_expires_on: number
  block_meraki_admins: boolean
  licensing_mode: number
  is_demo: boolean | null
}

export interface MkiconfAdministeredOrganizationCollection {
  [id: string]: MkiconfAdministeredOrganization
}
export interface MkiconfData {
  action_name: string
  administered_networks: {
    [id: string]: MkiconfAdministeredNetwork
  }
  administered_orgs: MkiconfAdministeredOrganizationCollection
  base_url: string
  controller_name: string
  current_user: {
    email: string
  }
  is_saml_user: boolean
  logout_url: string
  network_name: string
  network_type: string
  ng_id: string
  org_id: string
  shard_origin_url: string
}

export type DashboardVersion = 'magnetic' | 'standard'

// export type { MkiconfData, MkiconfAdministeredNetwork, MkiconfAdministeredOrganization }

export interface APIDescription {
  [name: string]: {
    url: string
    method?: 'GET' | 'POST'
    type?: 'text' | 'json'
  }
}

export interface MkiconfEvent {
  event: MessageEvent
  data: any
}
