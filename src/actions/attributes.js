export const UPDATE_ATTRIBUTE_DOCS = 'UPDATE_ATTRIBUTE_DOCS'
export const DELETE_ATTRIBUTE_DOCS = 'DELETE_ATTRIBUTE_DOCS'
export const SET_NS = 'SET_NS'
export const SET_USAGE = 'SET_USAGE'
export const SET_DATATYPE = 'SET_DATATYPE'
export const SET_VALLIST_TYPE = 'SET_VALLIST_TYPE'
export const ADD_VALITEM = 'ADD_VALITEM'
export const DELETE_VALITEM = 'DELETE_VALITEM'
export const UPDATE_VALITEM_DOCS = 'UPDATE_VALITEM_DOCS'

export function updateAttributeDocs(member, memberType, attr, docEl, content, index) {
  return {
    type: UPDATE_ATTRIBUTE_DOCS,
    member,
    memberType,
    attr,
    docEl,
    content,
    index
  }
}

export function deleteAttributeDocs(member, memberType, attr, docEl, index) {
  return {
    type: DELETE_ATTRIBUTE_DOCS,
    member,
    memberType,
    attr,
    docEl,
    index
  }
}

export function setNs(member, memberType, attr, ns) {
  return {
    type: SET_NS,
    member,
    memberType,
    attr,
    ns
  }
}

export function setUsage(member, memberType, attr, usage) {
  return {
    type: SET_USAGE,
    member,
    memberType,
    attr,
    usage
  }
}
