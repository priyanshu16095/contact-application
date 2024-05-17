package com.example.backend.controller;

import com.example.backend.entity.Contact;
import com.example.backend.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.springframework.util.MimeTypeUtils.IMAGE_JPEG_VALUE;
import static org.springframework.util.MimeTypeUtils.IMAGE_PNG_VALUE;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {
    String homeDirectory = System.getProperty("user.home");
    private final String PHOTO_DIRECTORY = homeDirectory + "contact-application\\src\\main\\resources\\static";

    private final ContactService contactService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteContact(@PathVariable Long id) {
        return contactService.deleteContact(id);
    }
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public Contact updateContact(@RequestBody Contact contact) {
        return contactService.updateContact(contact);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Contact getContact(@PathVariable Long id) {
        return contactService.getContact(id);
    }
    @GetMapping("/contacts")
    @ResponseStatus(HttpStatus.OK)
    public Page<Contact> getContacts(@RequestParam(value = "page", defaultValue = "0") int page,
                                     @RequestParam(value = "size", defaultValue = "10") int size){
        return contactService.getContacts(page, size);
    }

    @PutMapping("/uploadPhoto")
    public ResponseEntity<String> uploadPhoto(@RequestParam("id") Long id,
                                              @RequestParam("file") MultipartFile file) {
        String photoURL = contactService.uploadPhoto(id, file);
        return new ResponseEntity<>(photoURL, HttpStatus.CREATED);
    }
    @GetMapping(path = "/photo/{filename}", produces =  {IMAGE_PNG_VALUE, IMAGE_JPEG_VALUE})
    public byte[] getPhoto(@PathVariable String filename) throws IOException {
        Path fileLocation = Paths.get(PHOTO_DIRECTORY + "/" + filename);
        return Files.readAllBytes(fileLocation);
    }

}
