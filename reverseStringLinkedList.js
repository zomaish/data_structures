char arr[] = "my career stack".toCharArray();

class node {
    char data;
    node next;
}

public node createLL(){
    node head = new node();
    head.next = null;
    head.data = arr[0];
    int i = 1;
    node prev = head;
    while(i < arr.length){
        node temp = new node();
        temp.next = null;
        temp.data = arr[i];
        prev.next = temp;
        prev = temp;
        i++;
    }
    return head;
}

   public node reverseLL(node ll){
    if(ll == null || ll.next == null)
        return ll;
    node prev = null, c = ll, n = c;
    while(c != null){
        n = n.next;
        c.next = prev;
        prev = c;
        c = n;
    }
    ll = prev;
    return ll;
}

public node stringReverseChars(node ll){
    if(ll == null || ll.next == null)
        return ll;
    node tmp = ll;
    node head = null, prev = null;
    while(tmp != null){
        while(tmp != null && tmp.data == ' '){
            if(head == null)
                head = tmp;
            prev = tmp;
            tmp = tmp.next;
        }
        if(tmp == null)
            break;
        node curr = tmp;
        while(tmp.next != null && tmp.next.data != ' '){
            tmp = tmp.next;
        }
        node np = tmp.next;
        tmp.next = null;
        node rev = reverseLL(curr);
        if(prev != null)
            prev.next = rev;
        prev = curr;
        curr.next = np;
        if(head == null)
            head = rev;
        tmp = np;
    }
    return head;
}

    public void printLL(node ll){
    node temp = ll;
    while(temp != null){
        System.out.print(temp.data);
        temp = temp.next;
    }
    System.out.println();
}